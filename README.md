# Akhilesh Exports - Textile Manufacturing Website

**URL**: https://lovable.dev/projects/806328e2-4682-4522-948d-8ebaae827bd0

A modern, responsive website for Akhilesh Exports, a textile manufacturing and export company specializing in knitted garments.

## 🏭 Company Overview

Akhilesh Exports is a leading manufacturer and exporter of high-quality knitted garments, serving global buyers with state-of-the-art infrastructure and ethical manufacturing practices.

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **shadcn/ui** - Modern UI component library
- **React Router** - Client-side routing
- **Supabase** - Backend services and database
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
├── public/                     # Static assets
│   ├── robots.txt             # SEO robots configuration
│   └── favicon.ico            # Website favicon
├── src/
│   ├── assets/                # Image assets and media files
│   │   ├── logo.png          # Company logo
│   │   ├── hero-image.jpg    # Homepage hero background
│   │   ├── infrastructure.jpg # Infrastructure page image
│   │   ├── products-showcase.jpg # Products showcase image
│   │   └── certificates.jpg  # Certificates page image
│   ├── components/           # Reusable React components
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx   # Button component with variants
│   │   │   ├── card.tsx     # Card component for content sections
│   │   │   ├── dialog.tsx   # Modal dialog component
│   │   │   ├── form.tsx     # Form components
│   │   │   ├── input.tsx    # Input field component
│   │   │   ├── toast.tsx    # Toast notification component
│   │   │   └── ...          # Other UI components
│   │   ├── Layout.tsx       # Main layout wrapper with header and footer
│   │   ├── Navigation.tsx   # Responsive navigation bar
│   │   ├── Footer.tsx       # Website footer with links and contact
│   │   └── PerplexityContentGenerator.tsx # AI content generation component
│   ├── pages/               # Page components (routes)
│   │   ├── Index.tsx        # Homepage - company overview and features
│   │   ├── About.tsx        # About us page - company history and vision
│   │   ├── Infrastructure.tsx # Manufacturing facility details
│   │   ├── Products.tsx     # Product categories and catalog
│   │   ├── ProductCategory.tsx # Individual product category pages
│   │   ├── Buyers.tsx       # Global buyers and partnerships
│   │   ├── Certificates.tsx # Certifications and compliance
│   │   ├── Contact.tsx      # Contact information and form
│   │   ├── ContentManager.tsx # AI-powered content management
│   │   └── NotFound.tsx     # 404 error page
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile device detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/                 # Utility libraries
│   │   └── utils.ts         # Common utility functions
│   ├── integrations/        # Third-party service integrations
│   │   └── supabase/        # Supabase client and configuration
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and design system
│   └── vite-env.d.ts        # TypeScript environment definitions
├── supabase/                # Supabase backend configuration
│   ├── config.toml          # Supabase project configuration
│   └── functions/           # Edge functions
│       └── perplexity-content/ # AI content generation function
└── Configuration files:
    ├── package.json         # Dependencies and scripts
    ├── tsconfig.json        # TypeScript configuration
    ├── tailwind.config.ts   # Tailwind CSS configuration
    ├── vite.config.ts       # Vite build configuration
    └── eslint.config.js     # ESLint code quality rules
```

## 🎨 Design System

The website uses a comprehensive design system defined in `src/index.css` and `tailwind.config.ts`:

### Color Palette
- **Primary Colors**: Blue tones for brand identity
- **Secondary Colors**: Teal accents for highlights
- **Neutral Colors**: Grays for text and backgrounds
- **Dark/Light Mode**: Full support for both themes

### Typography
- **Font Family**: Poppins for modern, clean appearance
- **Font Weights**: Regular (400), Medium (500), Bold (700)
- **Responsive Sizing**: Scales appropriately across devices

### Components
All UI components follow consistent design patterns with:
- Semantic color tokens (no hardcoded colors)
- Consistent spacing and sizing
- Smooth animations and transitions
- Responsive design principles

## 📄 Page Structure

### Homepage (`/`)
- Hero section with company introduction
- Feature highlights (Infrastructure, Products, Buyers)
- Company statistics and achievements
- Call-to-action sections

### About (`/about`)
- Company history and background
- Mission, vision, and values
- Team information
- Company achievements

### Infrastructure (`/infrastructure`)
- Manufacturing facility overview
- Production capabilities
- Quality control systems
- Technology and equipment

### Products (`/products`)
- Product categories overview
- Individual product showcases
- Detailed product information
- Category-specific pages (`/products/[category]`)

### Buyers (`/buyers`)
- Global client portfolio
- Partnership information
- Export markets and regions
- Client testimonials

### Certificates (`/certificates`)
- Industry certifications
- Compliance standards
- Quality assurance certificates
- Ethical manufacturing credentials

### Contact (`/contact`)
- Contact information
- Office locations
- Contact form
- Map integration

### Content Manager (`/content-manager`)
- AI-powered content generation using Perplexity API
- Content editing and management tools
- SEO optimization features

## 🛠 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint code quality checks
```

## 🌐 Deployment Options

### Lovable Platform (Recommended)
1. Open your [Lovable Project](https://lovable.dev/projects/806328e2-4682-4522-948d-8ebaae827bd0)
2. Click "Share" → "Publish"
3. Your site will be live at `yoursite.lovable.app`

### GitHub Pages
1. Connect your project to GitHub via Lovable interface
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. Use the provided workflow for automatic deployment

### Vercel (Recommended for Production)
1. Import your GitHub repository to Vercel
2. Framework: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy automatically on git push

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on git push

### Self-Hosting
1. Run `npm run build` to create production files
2. Upload `dist/` folder contents to your web server
3. Configure server to serve `index.html` for all routes (SPA)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
PERPLEXITY_API_KEY=your_perplexity_api_key
```

### Supabase Setup
1. Create a Supabase project
2. Add your project URL and anon key to environment variables
3. Deploy edge functions: `supabase functions deploy perplexity-content`
4. Add `PERPLEXITY_API_KEY` secret to your Supabase project

## 🔄 Content Management

### Using Perplexity AI Integration
The `/content-manager` page provides AI-powered content generation:
- Generate product descriptions
- Create SEO-optimized content
- Update company information
- Generate blog posts and articles

### Manual Content Updates
Content can be updated by modifying the respective page components in `src/pages/`.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags optimization
- Robots.txt configuration
- Clean URLs with React Router
- Fast loading times with Vite
- Image optimization

## 🤝 Contributing

When making changes:
1. Follow the existing code structure
2. Use TypeScript for type safety
3. Follow the design system patterns
4. Test on multiple devices
5. Update documentation as needed

## 📞 Support

For technical support or questions about the codebase:
- Check the [Lovable Documentation](https://docs.lovable.dev/)
- Join the [Lovable Discord Community](https://discord.com/channels/1119885301872070706/1280461670979993613)
- Watch the [Lovable YouTube Tutorials](https://www.youtube.com/watch?v=9KHLTZaJcR8&list=PLbVHz4urQBZkJiAWdG8HWoJTdgEysigIO)

## 📄 License

This project is created for Akhilesh Exports. All rights reserved.

---

**Built with ❤️ using Lovable - The AI-powered development platform**