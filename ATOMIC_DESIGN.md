# Atomic Design Structure - Senza Media Portfolio

This project follows the **Atomic Design** methodology for organizing React components. This approach creates a hierarchical structure that makes components more maintainable, reusable, and scalable.

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/              # Smallest building blocks
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── TextArea.jsx
│   │   ├── Select.jsx
│   │   ├── Image.jsx
│   │   ├── Text.jsx
│   │   ├── Icon.jsx
│   │   └── index.js
│   │
│   ├── molecules/          # Simple component groups
│   │   ├── NavLink.jsx
│   │   ├── FormField.jsx
│   │   ├── SocialIcon.jsx
│   │   ├── ContactDetail.jsx
│   │   └── index.js
│   │
│   ├── organisms/          # Complex component compositions
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── TeamCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── PortfolioItem.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   │
│   └── templates/          # Page-level layouts
│       ├── MainLayout.jsx
│       └── index.js
│
├── pages/                  # Full page compositions
│   ├── HomePage.jsx
│   └── index.js
│
├── constants/              # App constants and configuration
│   ├── index.js
│   └── services.js
│
├── hooks/                  # Custom React hooks (future use)
│
├── App.js                  # Main application component
├── App.css                 # Global styles
└── index.js               # Entry point

```

## 🧱 Atomic Design Layers

### 1. **Atoms** (Basic Building Blocks)
The smallest, most fundamental components that can't be broken down further.

- **Button** - Reusable button with variants (primary, submit)
- **Input** - Form input field
- **TextArea** - Multi-line text input
- **Select** - Dropdown select field
- **Image** - Image component with fallback
- **Text** - Text wrapper with typography variants
- **Icon** - Icon wrapper with size variants

**Usage Example:**
```jsx
import { Button, Input, Text } from './components/atoms';

<Button variant="primary" icon={Send}>Submit</Button>
<Input type="email" placeholder="Your Email" />
<Text as="h1" variant="hero-title">Title</Text>
```

### 2. **Molecules** (Simple Components)
Groups of atoms that function together as a unit.

- **NavLink** - Navigation link with hover effects
- **FormField** - Label + Input/TextArea/Select combination
- **SocialIcon** - Clickable social media icon
- **ContactDetail** - Icon + text for contact information

**Usage Example:**
```jsx
import { FormField, SocialIcon } from './components/molecules';

<FormField 
  type="email" 
  label="Email"
  name="email"
  value={email}
  onChange={handleChange}
/>
<SocialIcon href="https://instagram.com" icon={Instagram} />
```

### 3. **Organisms** (Complex Components)
Relatively complex UI components composed of groups of molecules and/or atoms.

- **Header** - Site header with logo and navigation
- **Hero** - Hero section with title, subtitle, and CTA
- **TeamCard** - Team member card with image and details
- **ServiceCard** - Service offering card
- **PortfolioItem** - Portfolio image with overlay
- **ContactForm** - Complete contact/booking form
- **Footer** - Site footer

**Usage Example:**
```jsx
import { Header, Hero, ContactForm } from './components/organisms';

<Header studioName="Senza Media" navItems={navItems} />
<Hero title="Welcome" subtitle="Subtitle" ctaText="Book Now" />
<ContactForm serviceOptions={services} />
```

### 4. **Templates** (Page Layouts)
Page-level layouts that define the structure using organisms and other components.

- **MainLayout** - Main app layout with Header and Footer

**Usage Example:**
```jsx
import { MainLayout } from './components/templates';

<MainLayout>
  {children}
</MainLayout>
```

### 5. **Pages** (Full Pages)
Specific instances of templates with real content.

- **HomePage** - Complete home page with all sections

**Usage Example:**
```jsx
import { HomePage } from './pages';

<HomePage />
```

## 🎨 Styling Approach

Each component has its own CSS file:
- `ComponentName.jsx` - React component
- `ComponentName.css` - Component-specific styles

Global styles are in `App.css`.

## 📦 Constants

All app-wide constants are centralized in the `constants/` folder:
- Studio name, team members, services, portfolio items
- Navigation items, service options
- Image URLs and configuration

## 🔄 Data Flow

```
Constants (data) 
    ↓
Pages (uses organisms + data)
    ↓
Organisms (uses molecules + atoms)
    ↓
Molecules (uses atoms)
    ↓
Atoms (base components)
```

## ✨ Benefits of This Structure

1. **Reusability** - Components can be used across different pages
2. **Maintainability** - Easy to locate and update components
3. **Scalability** - Simple to add new components and features
4. **Consistency** - Design system enforced through atoms
5. **Testing** - Each layer can be tested independently
6. **Collaboration** - Clear structure for team development

## 🚀 Adding New Features

### Adding a new atom:
1. Create `NewAtom.jsx` and `NewAtom.css` in `components/atoms/`
2. Export from `components/atoms/index.js`

### Adding a new page:
1. Create `NewPage.jsx` and `NewPage.css` in `pages/`
2. Import necessary organisms and molecules
3. Use constants for data
4. Export from `pages/index.js`

### Adding a new section:
1. Create organism component for the section
2. Add it to the appropriate page
3. Style it in the organism's CSS file

## 📖 Further Reading

- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic Design in React](https://atomicdesign.bradfrost.com/chapter-2/)
