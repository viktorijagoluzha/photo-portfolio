# EmailJS Setup (100% Free - No Payment Required)

EmailJS allows you to receive booking requests directly to your email without any backend server.

## Step-by-Step Setup

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Click **"Sign Up Free"**
- Sign up with Google or email
- **Free plan includes 200 emails/month**

### 2. Add Email Service
- After login, go to **"Email Services"**
- Click **"Add New Service"**
- Choose your email provider:
  - Gmail (recommended)
  - Outlook
  - Yahoo
  - Or any other
- Click **"Connect Account"** and authorize access
- Copy the **Service ID** (looks like: `service_xxxxxxx`)

### 3. Create Email Template
- Go to **"Email Templates"**
- Click **"Create New Template"**
- Set up the template:

**Subject:**
```
New Booking Request from {{from_name}}
```

**Content:**
```
You have a new booking request!

Name: {{from_name}}
Email: {{from_email}}
Service: {{service}}

Details:
{{message}}

---
Sent from Mizuki Vision website
```

- Click **"Save"**
- Copy the **Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key
- Go to **"Account"** (top right menu)
- Go to **"General"** tab
- Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

### 5. Update .env File
Add these to your `.env` file:
```
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Update Email Address
In `src/components/organisms/ContactForm.jsx` line 42:
- Replace `'your-email@example.com'` with your actual email

### 7. Restart React App
```bash
npm start
```

## How It Works
1. User fills booking form
2. Form sends data to EmailJS
3. EmailJS sends email to your inbox
4. You receive booking details instantly!

## Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox
4. You should receive the booking details

## Troubleshooting

**Not receiving emails?**
- Check spam/junk folder
- Verify Service ID, Template ID, and Public Key are correct
- Make sure email service is connected in EmailJS dashboard
- Check EmailJS dashboard → "Monitoring" for delivery status

**Template variables not working?**
- Make sure template variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Variable names are case-sensitive

## Free Plan Limits
- **200 emails per month**
- Enough for most small businesses
- Upgrade to paid plan ($7/month) for 1000+ emails if needed

## Advantages
✅ Completely free (200 emails/month)
✅ No backend server needed
✅ No payment required
✅ Works instantly
✅ Receives emails to your inbox
✅ Can forward to SMS via email-to-SMS if your carrier supports it
