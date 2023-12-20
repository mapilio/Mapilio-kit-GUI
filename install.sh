echo "Installing Mapilio Uploader GUI..."

pip install virtualenv

virtualenv mapilio_uploader_gui_venv

source mapilio_uploader_gui_venv/bin/activate

pip install -r requirements.txt

npm install

npm run build:web

echo "Installation has been completed."

python app.py
