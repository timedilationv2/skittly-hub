import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_response(job_description):
    prompt = f"Generate a professional and personalized response to this job description:\n\n{job_description}\n\nResponse:"

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You generate professional job application responses tailored to provided job descriptions."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=350
    )

    return completion.choices[0].message.content.strip()