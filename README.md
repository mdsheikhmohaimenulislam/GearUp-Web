# GearUp Frontend 🏋️

## Rent Sports & Outdoor Gear Instantly

GearUp is a modern, scalable, and responsive **Next.js web application** designed for a seamless sports and outdoor equipment rental experience.

The platform allows customers to discover available gear, check availability, select rental dates, complete secure payments, and track rental orders. Providers can manage their inventory and rental requests, while administrators can monitor and control the entire platform.

Built with modern frontend technologies, GearUp focuses on performance, accessibility, responsive design, and an intuitive user experience.

---

# 🌐 Live Application

🔗 Live Website: [GearUp Frontend](https://gearup-frontend-rho.vercel.app/)

🔗 Backend API: [[GearUP Server](https://gearup-server-evrk.vercel.app/)]

---

# 📖 Project Overview

GearUp is a full-featured equipment rental platform that connects customers with sports gear providers.

The application provides a role-based experience with three different user types:

**Email:** loi6@gmail.com 
**Password:** 12345678

### 👤 Customer
Customers can:

- Browse available sports equipment
- Search and filter gears
- View detailed product information
- Select rental dates
- Place rental orders
- Complete online payments
- Track rental status
- Submit reviews after returning equipment


## 🏪 Provider Account

**Email:** tanjirokamado@gmail.com
**Password:** tanjirokamado

### 🏪 Provider
Providers can:

- Create and manage gear listings
- Update inventory information
- Manage rental requests
- Track active rentals
- Update order statuses

## 🛡️ Admin Account

**Email:** admin@gmail.com 
**Password:** 12345678

### 🛡️ Admin
Administrators can:

- Monitor platform statistics
- Manage users
- Moderate gear listings
- Oversee rental activities

---

# ✨ Key Features

## 🌍 Public Features

## 🏋️ Gear Listing & Browsing

Users can explore available sports and outdoor equipment through a responsive and optimized interface.

Features include:

- Modern responsive gear grid
- Next.js optimized image rendering
- Gear availability indicators
- Category information
- Daily rental pricing
- Provider details


---

## 🔎 Advanced Search & Filtering

Users can quickly find suitable equipment using:

- Category filters
- Brand filters
- Price range filtering
- Availability checking
- Real-time filter updates


---

## 📄 Gear Details Page

Each gear item provides detailed information:

- Multiple image gallery
- Product specifications
- Rental pricing
- Stock availability
- Provider profile information
- Interactive rental section


---

## ⚡ Loading & Error Management

Implemented user-friendly states:

- Skeleton loaders during data fetching
- Custom error handling
- Next.js `error.tsx` fallback pages
- Graceful API error messages
- Toast notifications for user feedback


---

# 👤 Customer Features

## 🔐 Authentication System

Secure authentication flow includes:

- User registration
- User login
- Role selection
- Form validation
- Authentication error handling
- Protected routes


---

# 🛒 Rental & Checkout Flow

Customer rental journey:

### 📌 Rental Process Overview

1. **Register / Login**
   - Users create an account or log in to access rental services.

2. **Browse Available Gear**
   - Customers can explore available sports and outdoor equipment.

3. **View Gear Details**
   - Users can check equipment details, pricing, availability, and images.

4. **Select Rental Dates**
   - Customers choose their preferred rental period.

5. **Confirm Rental Order**
   - Users review rental information and confirm their order.

6. **Complete Payment**
   - Customers complete secure payment through available payment methods.

7. **Track Rental Status**
   - Users can monitor their rental progress and order updates.

8. **Return Equipment**
   - Customers return rented equipment after completing their rental period.

9. **Submit Review**
   - Users can share feedback and rate their rental experience.

---

# 💳 Payment Integration

Integrated payment experience:

- Stripe Checkout support
- SSLCommerz payment support
- Payment success page
- Payment cancellation page
- Transaction status handling


---

# 📊 Customer Dashboard

Customers can manage their rental activities:

### Order Management

- View rental history
- Check order status
- Track active rentals
- View completed rentals


### Payment History

- View payment records
- Check transaction status


### Review System

Customers can:

- Submit gear reviews
- Rate rental experiences
- Provide feedback after returning equipment


---

# 🏪 Provider Features

## 📊 Provider Dashboard

Providers get an overview of their rental business:

Dashboard statistics:

- Total listed gear
- Active rentals
- Pending rental requests
- Completed orders


---

# 📦 Inventory Management

Providers can:

- Add new gear
- Edit existing gear
- Remove gear listings
- Update pricing
- Manage stock quantity
- Control availability status
- Upload gear images


---

# 📋 Rental Order Management

Providers can:

- View incoming rental requests
- Confirm orders
- Update rental status
- Mark equipment as picked up
- Mark returned equipment

### 📌 Order Status Explanation

1. **PLACED**
   - Customer successfully creates a rental order.

2. **CONFIRMED**
   - Provider or system confirms the rental request.

3. **PAID**
   - Customer completes the payment successfully.

4. **PICKED_UP**
   - Customer receives the rented equipment.

5. **RETURNED**
   - Customer returns the equipment after completing the rental period.


---

# 🛡️ Admin Features


## 📈 Admin Dashboard

Platform administrators can monitor:

- Total users
- Active providers
- Available gear
- Total rentals
- Platform statistics


---

## 👥 User Management

Admin capabilities:

- View all users
- Search users
- Manage user accounts
- Suspend users
- Activate users


---

## 🛠️ Content Moderation

Admins can review:

- Gear listings
- Rental activities
- User-generated content


---

# 🛣️ Application Routes
### 📌 Route Overview

| Route | Description |
|------|-------------|
| `/` | Landing page with featured gear and platform overview |
| `/gear` | Browse and filter available sports equipment |
| `/gear/[id]` | View detailed information about a specific gear item |
| `/auth/register` | Create a new user account |
| `/auth/login` | Authenticate existing users |
| `/dashboard/customer` | Manage rentals, orders, payments, and reviews |
| `/dashboard/provider` | Manage gear inventory and rental requests |
| `/dashboard/admin` | Manage users, gears, orders, and platform activities |
| `/payment/success` | Confirmation page after successful payment |
| `/payment/cancel` | Page shown when payment is cancelled |

---

# 🔐 Route Protection

GearUp uses **Next.js Middleware** for secure route protection.

Protected areas:

Access is controlled based on:

- Authentication status
- User role permissions


---

# 🛠️ Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React


## Form & Validation

- React Hook Form
- Zod Validation


## Data Management

- Fetch API / Axios
- TanStack Query


## Authentication

- JWT Authentication
- HTTP Only Cookies
- Next.js Middleware


## Payment

- Stripe Checkout
- SSLCommerz Gateway


---

# 📂 Project Structure

### 📌 Folder Description

| Folder | Purpose |
|--------|---------|
| `app` | Next.js App Router pages, layouts, and route handling |
| `components` | Reusable UI components and page sections |
| `hooks` | Custom React hooks for shared logic |
| `services` | API communication and server actions |
| `utils` | Common helper functions and configurations |
| `types` | Shared TypeScript interfaces and types |
| `middleware.ts` | Authentication, authorization, and route protection |


---

# ⚙️ Installation & Setup

## 📥 Clone Repository

```bash
git clone your-repository-url

---

```bash
git cd gearup-frontend
---
```bash
npm install
---
```bash
NEXT_PUBLIC_API_URL=your_backend_api_url

NEXT_PUBLIC_STRIPE_KEY=your_stripe_publishable_key
---
```bash
npm run dev
---

---

## 📱 Responsive Design

GearUp is designed to provide a seamless experience across all screen sizes.

Supported devices:

✅ Desktop  
✅ Tablet  
✅ Mobile Devices  

---

## 🎨 UI/UX Highlights

The application focuses on a modern, user-friendly, and accessible experience.

Key highlights:

- Modern dashboard interface
- Fully responsive layouts
- Clean and reusable component architecture
- Accessible UI components
- Smooth user interactions
- Loading states and feedback handling
- Error handling system
- Toast notifications for user actions

---

## 🚀 Future Improvements

Planned features and improvements:

- Real-time notifications
- Customer-provider messaging system
- AI-based gear recommendation
- Dedicated mobile application
- Advanced analytics dashboard
- Improved rental tracking system

---

## 👨‍💻 Developer

**Mohaimenul Islam**  
Junior Full Stack Web Developer

### 🛠️ Skills & Technologies

#### Frontend
- React.js
- Next.js 16 (App Router)
- TypeScript
- JavaScript (ES6+)
- Tailwind CSS
- Shadcn UI
- Radix UI
- React Hook Form
- Zod Validation
- React Icons
- Lucide Icons
- Remix Icons
- Next Themes

#### State & User Experience
- JWT Authentication
- JWT Decode
- Toast Notifications (Sonner)
- Loading & Error Handling
- Responsive Design
- Component-Based Architecture

#### Backend & Database
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

#### Forms & Validation
- React Hook Form
- Zod Schema Validation
- Hook Form Resolvers

#### Animation & UI Enhancement
- Lottie React
- React CountUp
- Tailwind CSS Animations
- TW Animate CSS

#### Development Tools
- npm
- ESLint
- TypeScript Compiler
- Next.js Development Server
- Git & GitHub

---

### 🛠️ Skills

- React.js
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- Shadcn UI
- Radix UI
- React Hook Form
- Zod
- JWT Authentication
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Responsive Design
- REST API Integration
- ESLint
- Git & GitHub

## 📄 License

This project is developed for educational and portfolio purposes.