FROM tiangolo/uvicorn-gunicorn:python3.8-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY ./app/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the rest of your application code
COPY ./app /app

# Set the PORT environment variable to match Render's requirements
ENV PORT="10000"

# Command to run the app, using the specified port
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "10000"]
