# Havenly
Havenly’s mission is to provide users with the tools and resources they need to navigate the digital world with confidence and security. We are committed to ensuring that every human, regardless of age, can protect himself from online harassment, stalking, and data breaches. By offering features like Parental Control, users can safeguard young individuals from harmful content and potential threats. Additionally, our Psychological Assistance feature ensures that users affected by online abuse receive the support they need to recover emotionally.  
With the help of AI-driven technology, Havenly actively detects and prevents cyberbullying while enabling users to block harmful behavior in real time. We aim to raise awareness and educate users about digital safety, empowering them to take control of their online privacy through our Education and Awareness section. Beyond protecting personal data, our app goes further by providing alerts for potential real-world threats, offering a holistic approach to online and offline security.

# Technologies
<!-- - ReactJS
- React Native
- Django
- Langchain
- Gemini -->
<div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items-center; justify-content: center;">
    <!-- <div> -->
        <img alt="ReactJS" src="assets/React-Logo.png" style="height:150px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="React Native" src="assets/React-Native-Logo.svg" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="Expo" src="assets/Expo-Logo.webp" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="Redux" src="assets/Redux-Logo.png" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="API" src="assets/Api-Logo.webp" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="HTTP" src="assets/Http-Logo.png" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="Websocket" src="assets/Websocket-Logo.svg" style="width:200px; object-fit: contain" />
    <!-- </div> -->
    <!-- <img alt="Django" src="assets/Django-Logo.png" style="width:200px; object-fit: contain" /> -->
    <!-- <div> -->
        <img alt="Django Rest API" src="assets/Django-Rest-Logo.png" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="My SQL" src="assets/Mysql-Logo.png" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="Langchain" src="assets/Langchain-Logo.png" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="Gemini" src="assets/Gemini-Logo.png" style="width:200px; object-fit: contain" />
    <!-- </div>
    <div> -->
        <img alt="Qdrant" src="assets/Qdrant-Logo.svg" style="width:200px; object-fit: contain" />
    <!-- </div> -->
</div>

# Setting up the Mobile Application
1. Make sure you have NodeJS v20 LTS installed
2. `cd wiesec/mobile`
3. Run `npm install`
4. Run `npm run start`
5. Scan QR Code using Expo Go

# Setting up the Backend
1. Make sure you have Python 3.12 installed
2. Create a table in MySQL named `wiesec` for example
3. Install **Pipenv** by following this [tutorial](https://pipenv.pypa.io/en/latest/installation.html)
4. Clone the project using `git clone https://github.com/ystn/wiesec.git`
4. `cd wiesec/backend`
5. `cp .env.example .env`
6. Make needed changes to `.env` file
7. Execute `pipenv install`
8. Activate the virtual environment by running `pipenv shell`
9. Sync database by running `python manage.py migrate`
10. Start the development server by running `python manage.py runserver`
