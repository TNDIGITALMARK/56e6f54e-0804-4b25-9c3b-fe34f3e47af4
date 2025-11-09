# SwiftRoute Transportation Website

A professional transportation company website built with Next.js 15, featuring pixel-perfect design replication and modern web technologies.

## 🚚 Project Overview

SwiftRoute Transportation is a full-featured delivery service website offering:
- Professional box truck delivery services
- Same-day and scheduled delivery options
- Real-time package tracking
- Instant quote calculator
- Service area coverage across tri-city metropolitan area

## ✨ Features

### Homepage
- Hero section with professional truck imagery and CTAs
- Services showcase with pricing
- Interactive package tracking system
- Customer testimonials with ratings
- Trust indicators and company statistics

### Services Page
- Detailed service descriptions and pricing
- Box truck specifications
- Service area information
- Special handling options
- Transparent pricing comparison

### Quote/Contact Page
- Instant quote calculator
- Comprehensive contact form
- Real-time price estimation
- Business information and hours
- FAQ section

## 🎨 Design System

### Color Palette
- **Primary Navy**: `hsl(214, 53%, 25%)` - Header/Footer background
- **Primary Blue**: `hsl(211, 71%, 58%)` - Buttons, icons, accents
- **Light Blue**: `hsl(207, 73%, 63%)` - Testimonial cards
- **Orange Accent**: `hsl(36, 90%, 55%)` - CTA buttons
- **Background**: `hsl(0, 0%, 96%)` - Page background

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading Scale**: 48px (h1) → 16px (h6)
- **Body Text**: 16px, line-height 1.6
- **Font Weights**: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)

### Components
- **Cards**: 8px border-radius, subtle shadow
- **Buttons**: 4px border-radius, hover transitions
- **Forms**: Focused states with ring effect
- **Icons**: Lucide React icon library

## 🛠 Technology Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: Lucide React
- **Images**: AI-generated assets (Banana Nano MCP)
- **TypeScript**: Full type safety
- **SEO**: Optimized metadata and semantic HTML

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── services/          # Services & Pricing
│   ├── contact/           # Quote & Contact
│   ├── pricing/           # Redirect to services
│   ├── tracking/          # Redirect to homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & design system
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   └── home/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── TrackingSection.tsx
│       └── TestimonialsSection.tsx
└── public/
    └── generated/         # AI-generated images
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Key Implementation Details

### Pixel-Perfect Design Replication
- Extracted exact color values from design reference
- Matched typography scale and spacing precisely
- Replicated component styling and visual effects
- Maintained consistent design language throughout

### Responsive Design
- Mobile-first approach with breakpoints
- Hamburger menu for mobile navigation
- Stacked layouts for smaller screens
- Touch-friendly interactive elements

### Interactive Features
- Package tracking with mock results
- Dynamic quote calculator
- Form validation and user feedback
- Smooth transitions and hover effects

### Performance Optimizations
- Next.js Image component for optimized images
- Static generation where possible
- CSS custom properties for efficient styling
- Minimal JavaScript for faster load times

## 🎯 Business Features

### Services Offered
1. **Local Delivery** - Starting at $89
   - Within 50 miles
   - Same-day available
   - Real-time tracking

2. **Furniture & Appliance** - Starting at $149
   - Heavy item specialists
   - White glove service
   - Assembly assistance

3. **Business Supply** - Starting at $69
   - Regular routes
   - Volume discounts
   - Flexible scheduling

### Service Area
- Tri-city metropolitan area
- Same-day delivery within service area
- Scheduled delivery options
- Multiple stop capability

### Company Information
- **Phone**: 555-TRANSPORT
- **Email**: quotes@swiftroute.com
- **Address**: 123 Industrial Drive, Metro City
- **Hours**: Mon-Fri 7am-7pm, Sat 8am-5pm

## 📊 Technical Highlights

- **SEO Optimized**: Semantic HTML, meta tags, structured content
- **Accessibility**: Proper ARIA labels, keyboard navigation
- **Type Safety**: Full TypeScript implementation
- **Modern CSS**: CSS Grid, Flexbox, Custom Properties
- **Component Architecture**: Reusable, maintainable components

## 🔧 Customization

### Updating Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --primary-navy: 214 53% 25%;
  --primary-blue: 211 71% 58%;
  --orange-accent: 36 90% 55%;
}
```

### Modifying Services
Update service data in respective page components:
- `src/components/home/ServicesSection.tsx`
- `src/app/services/page.tsx`

### Changing Contact Info
Update contact details in:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/app/contact/page.tsx`

## 📄 License

This is a demonstration project created for portfolio purposes.
