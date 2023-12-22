import io
import os
import sys
sys.stdout = open(os.devnull, 'w')
sys.stderr = open(os.devnull, 'w')
import eel
import getpass
import logging
import typing as T
import requests
import tkinter as tk
import tkinter.filedialog as filedialog
from mapilio_kit.components.edit_config import edit_config_gui
from mapilio_kit.components.login import list_all_users
from mapilio_kit.base import decomposer
from mapilio_kit.components.upload import upload
from mapilio_kit.components.video_processor import video_sampler
from mapilio_kit.components.process_csv_to_description import process_csv_to_description


eel.init('build')

def check_count_users():
    return len(list_all_users())
def perform_decompose(image_path):
    create_path_arg = {'import_path': image_path}
    return decomposer().perform_task(create_path_arg)

@eel.expose
def check_credentials():
    count = check_count_users()
    if count == 0:
        return False
    else:
        return True

@eel.expose
def check_authenticate(email, password):
    func_args = _get_args(edit_config_gui)
    func_args['user_email'] = email
    func_args['user_password'] = password
    return edit_config_gui(**func_args)

@eel.expose
def image_upload(image_path):
    perform_decompose(image_path)
    func_args = _get_args(upload)
    func_args['import_path'] = image_path
    return upload(**func_args)

@eel.expose
def get_absolute_path():
    root = tk.Tk()
    root.attributes("-topmost", True)
    root.withdraw()
    absolute_path = filedialog.askdirectory()
    return absolute_path

@eel.expose
def get_file_path():
    root = tk.Tk()
    root.attributes("-topmost", True)
    root.withdraw()
    file_path = filedialog.askopenfilename()
    return file_path

# TODO: Panorama image upload can't be made compatible rn because it does not work on mapilio-kit properly
@eel.expose
def panorama_image_upload(image_and_csv_path):
    func_args = _get_args(process_csv_to_description)
    func_args['import_path'] = image_and_csv_path
    for i in os.listdir(image_and_csv_path):
        if i.endswith(".csv"):
            func_args['csv_path'] = image_and_csv_path + "/" + i
    if func_args['csv_path'] is None:
        return False
    return process_csv_to_description(**func_args)

@eel.expose
def video_upload(video_path):
    func_args = _get_args(video_sampler)
    func_args['video_import_path'] = video_path
    import_path = '/'.join(video_path.split('/')[:-1]) + '/' + 'mapilio_sampled_video_frames' + '/'
    func_args['import_path'] = import_path
    func_args['video_sample_interval'] = 2
    func_args['video_duration_ratio'] = 1.0
    func_args['skip_subfolders'] = False
    video_sampler(**func_args)
    return image_upload(import_path)

def _get_args(func):
    arg_names = func.__code__.co_varnames[:func.__code__.co_argcount]
    return {arg: None for arg in arg_names}

eel.start('index.html', mode='default', size = (800, 500), port = 0)