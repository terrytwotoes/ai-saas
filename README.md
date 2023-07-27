SaaS AI Platform

![1](https://github.com/terrytwotoes/ai-saas/assets/62052347/f3adae16-6bc9-4a1d-ae2d-da99a38babd5)

Platform Demo
Table of Contents

    Introduction
    Features
    Technologies Used
    Installation
    Configuration
    Usage
    Deployment
    Support
    Contributing
    License

Introduction

Genie is a SaaS AI platform that [briefly describe what your platform does and its main features]. The platform is built using Next.js, Tailwind CSS, Stripe for payments, Prisma for database management, Crisp for customer support, and Shadcn-UI for UI components.


Features
   * Authentication: Utilizing Clerk, it supports various login methods such as Email, Google, and 9+ Social Logins.
   * Client Form Validation: Implemented with react-hook-form, ensuring efficient and accurate form handling on the client-side.
   * Server Error Handling: Integrated react-toast for seamless error management on the server-side.
   * AI-Powered Image Generation: Leverages Open AI to generate images with advanced AI capabilities.
   * Video & Music Generation Tool: Utilizes Replicate AI to create AI-generated videos and music.
   * Conversation Generation: Employs Open AI to generate realistic and contextually relevant conversations.
   * Stripe Monthly Subscription: Implements Stripe for easy and secure monthly subscription management.
   * Free Tier with API Limiting: Offers a free tier for users with API usage limitations.
   * Handling Relations Between Server and Child Components: Details how to manage relationships and communication between server and child components.
   * Next 13 App Router Folder Structure: Provides a well-organized folder structure for Next.js 13 App Router.

     ![2](https://github.com/terrytwotoes/ai-saas/assets/62052347/5c2e782f-c51b-42fc-8fcb-40030359928e)



Technologies Used:

    * Next.js: 
    * Tailwind CSS:
    * Stripe: 
    * Prisma: 
    * Crisp: 
    * Shadcn-UI: 

Installation

To set up the project locally, follow these steps:

Clone the repository

    git clone https://github.com/terrytwotoes/ai-saas.git


Install the dependencies:

     npm install



Configuration:
Create a .env file. Fill in the necessary environment variables in the .env file:

    
    
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    
    OPENAI_API_KEY=
    REPLICATE_API_TOKEN=
    
    DATABASE_URL=
    
    STRIPE_API_KEY=
    STRIPE_WEBHOOK_SECRET=
    
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    
