
<!-- PROJECT BANNER -->
<div align="center">
  <img src="https://github.com/timedilationv2/skittly/blob/main/Image.jpeg?raw=true" alt="Skittly Banner" width="800">
</div>

<br/>

<!-- BADGES -->
<div align="center">

![GitHub License](https://img.shields.io/github/license/timedilationv2/skittly?style=flat&logo=github)
![Python](https://img.shields.io/badge/Python-3.8%2B-blue?style=flat&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)
![OpenAI](https://img.shields.io/badge/OpenAI-API-green?style=flat&logo=openai)
![Docker](https://img.shields.io/badge/Docker-Container-blue?style=flat&logo=docker)
![Slack](https://img.shields.io/badge/Slack-Community-brightgreen?style=flat&logo=slack)
![OpenAccess](https://img.shields.io/badge/OpenAccess-Open%20Source-brightgreen?style=flat&logo=github)

</div>

---

## Skittly

Generate tailored, personalized job application responses instantly using generative AI.

[Explore the documentation »](https://github.com/timedilationv2/skittly) | [View Demo](https://github.com/timedilationv2/skittly) | [Report Bug](https://github.com/timedilationv2/skittly/issues) | [Request Feature](https://github.com/timedilationv2/skittly/issues)

---

## 📝 About The Project

Skittly simplifies your job application process by automatically generating personalized and compelling responses from job descriptions (JDs). Built with OpenAI’s advanced generative AI models and FastAPI backend, Skittly helps you efficiently and effectively apply for jobs.

**Why Skittly?**
- ✅ Automatically creates tailored, high-quality responses
- ✅ Streamlined workflow with FastAPI and CLI integration
- ✅ Efficient, scalable, and easy-to-use

---

## 🚀 Getting Started

Follow these simple steps to get Skittly running locally:

### 📋 Prerequisites
- Python 3.8 or higher
- [OpenAI API key](https://platform.openai.com/api-keys)

### 🛠 Installation

```bash
git clone https://github.com/timedilationv2/skittly.git
cd skittly
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Configure your OpenAI API key:
- Create `.env` file and add:
```
OPENAI_API_KEY=your_openai_api_key_here
```

3. Launch FastAPI server:
```bash
uvicorn src.main:app --reload
```

Visit [`http://127.0.0.1:8000/docs`](http://127.0.0.1:8000/docs) to interact with the API.

---

## 🎯 Usage

Use the API endpoint `/generate-response`:

```bash
curl -X POST "http://127.0.0.1:8000/generate-response" -H "Content-Type: application/json" -d '{"job_description": "Paste your job description here"}'
```

---

## 📂 Project Structure

```
skittly/
├── data/             # Job description examples
├── docs/             # Project documentation
├── outputs/          # AI-generated responses
├── src/              # Application code
├── tests/            # Unit tests
├── .gitignore
├── README.md
└── requirements.txt
```

---

## 🗺 Roadmap

- [x] Project structure setup
- [x] Basic FastAPI endpoints
- [ ] Complete OpenAI integration
- [ ] Docker containerization
- [ ] Detailed documentation and CLI enhancements

See the [open issues](https://github.com/timedilationv2/skittly/issues) for additional proposed features.

---

## 🤝 Contributing

Contributions are greatly welcomed:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push your changes (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## 📜 License

Distributed under the MIT License.

---

## 📫 Contact

**Arsalan Khan** – [@timedilationv2](https://github.com/timedilationv2)

Project Link: [https://github.com/timedilationv2/skittly](https://github.com/timedilationv2/skittly)

---

## 🌟 Acknowledgments

- [OpenAI API](https://openai.com)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Docker](https://docker.com)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
