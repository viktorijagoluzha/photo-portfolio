# SMS Notification Setup

This backend API sends SMS notifications when someone submits a booking request.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install express cors twilio dotenv
```

### 2. Get Twilio Credentials

1. Sign up for a free Twilio account at https://www.twilio.com/try-twilio
2. Get a free trial phone number from the Twilio console
3. Find your Account SID and Auth Token in the console

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

### 4. Update Phone Number

In `src/components/organisms/ContactForm.jsx`, replace `+38970XXXXXX` with your actual phone number (include country code).

### 5. Run the API Server

```bash
node server/api.js
```

### 6. Run React App (in another terminal)

```bash
npm start
```

## Alternative SMS Services

If you prefer other services:

### Vonage (Nexmo)
- https://www.vonage.com/communications-apis/sms/

### Amazon SNS
- https://aws.amazon.com/sns/

### MessageBird
- https://www.messagebird.com/

## Note for Production

For production deployment:
- Use environment variables for sensitive data
- Add rate limiting to prevent spam
- Validate phone numbers
- Add authentication/authorization
- Consider using a message queue for reliability
