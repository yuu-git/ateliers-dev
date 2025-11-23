# CLAUDE.md - AI Assistant Guide for ateliers-dev

This document provides comprehensive guidance for AI assistants working with the ateliers-dev repository. It covers codebase structure, development workflows, and key conventions.

---

## Table of Contents

1. [Repository Overview](#repository-overview)
2. [Codebase Structure](#codebase-structure)
3. [Development Workflows](#development-workflows)
4. [Article Creation Guidelines](#article-creation-guidelines)
5. [Component Architecture](#component-architecture)
6. [Git Workflow](#git-workflow)
7. [Build and Deployment](#build-and-deployment)
8. [Key Conventions](#key-conventions)
9. [AI Assistant Instructions](#ai-assistant-instructions)

---

## Repository Overview

**Project Name**: ateliers-dev
**Type**: Docusaurus-based static site generator
**Purpose**: Personal technical portfolio showcasing technical notes, guidelines, policies, and educational materials
**License**: MIT
**Primary Language**: Japanese (ja)
**Live Site**: https://ateliers.dev/

### Technology Stack

- **Framework**: Docusaurus v3.9.2 (latest as of 2025/11/22)
- **Node.js**: v20.7.0 (minimum v18.0 required)
- **React**: v18.0.0
- **TypeScript**: ~5.2.2
- **Markdown**: MDX with Mermaid diagram support
- **Deployment**: GitHub Pages (gh-pages branch)
- **CI/CD**: GitHub Actions

### Key Dependencies

```json
{
  "@docusaurus/core": "^3.9.2",
  "@docusaurus/preset-classic": "^3.9.2",
  "@docusaurus/theme-mermaid": "^3.9.2",
  "react": "^18.0.0",
  "react-share": "^5.1.0",
  "mermaid": "^10.9.0"
}
```

---

## Codebase Structure

```
ateliers-dev/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── .submodules/                # Git submodules
├── ai-guides/                  # AI assistant instruction manuals
│   ├── README.md              # Index of all instruction files
│   ├── docusaurus-article-instruction.md
│   ├── github-guidelines-instruction.md
│   ├── technical-policies-instruction.md
│   ├── technical-notebook-instruction.md
│   ├── profile-instruction.md
│   └── faq-instruction.md
├── blog/                       # Blog posts (currently minimal usage)
│   └── authors.yml            # Author information
├── docs/                       # Main documentation content
│   ├── faq.md                 # FAQ page
│   ├── site-content-list.md   # Content listing page
│   ├── site-guidance/         # Site introduction and guides
│   ├── github-guidelines/     # GitHub usage guidelines
│   ├── technical-policies/    # Technical policies and standards
│   ├── technical-notebook/    # Technical notes and tutorials
│   └── profiles/              # Author profiles
├── src/
│   ├── components/            # React components
│   │   ├── IntegratedArticleComponents/  # FullHeader, FullFooter
│   │   ├── ArticlesTable/
│   │   ├── SeriesList/
│   │   ├── RelatedArticles/
│   │   ├── SocialShare/
│   │   ├── CopyToClipboardButton/
│   │   ├── DateHeader/
│   │   └── HomepageFeatures/
│   ├── css/
│   │   └── custom.css         # Custom styling
│   └── data/
│       └── ateliers-dev_content-list.json  # Content metadata
├── static/                     # Static assets (images, icons)
│   └── img/
├── docusaurus.config.ts        # Main Docusaurus configuration
├── sidebars.ts                 # Sidebar navigation configuration
├── customConfig.ts             # Custom site configuration
├── babel.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### Directory Purposes

#### `/docs` - Content Organization

The docs directory is organized by content type:

1. **site-guidance/** - Site introduction, update history, credits
2. **github-guidelines/** - GitHub repository and workflow guidelines
3. **technical-policies/** - Technical standards and coding policies
4. **technical-notebook/** - Technical tutorials, notes, and how-tos
5. **profiles/** - Author information and development environment

Each section has:
- `index.md` - Section landing page
- `.template.md` - Template for new articles (where applicable)
- `writing-guide.md` - Section-specific writing guidelines (where applicable)

#### `/ai-guides` - AI Assistant Instructions

Contains detailed instruction manuals for AI assistants to generate/update content:
- Each file corresponds to a content section
- Includes templates, required components, and update procedures
- **CRITICAL**: Always reference these files before creating/updating articles

#### `/src/components` - React Components

Custom components used throughout the site:

- **IntegratedArticleComponents/** - Core article components
  - `FullHeader.tsx` - Article header with metadata
  - `FullFooter.tsx` - Article footer with navigation
  - `DateAndCopyUrlHeader.tsx` - Date display with URL copy
  - `CopyUrlFooter.tsx` - URL copy functionality
- **SeriesList/** - Display article series navigation
- **RelatedArticles/** - Show related content
- **SocialShare/** - Social media sharing buttons
- **ArticlesTable/** - Content listing tables

#### `/src/data` - Content Metadata

`ateliers-dev_content-list.json` contains structured metadata for all articles:
- Used to generate content tables
- Includes title, link, description, tags, series info
- **MUST** be kept in sync with `sidebars.ts`

---

## Development Workflows

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Type checking
npm run typecheck

# Clear cache
npm run clear
```

Development server runs on `http://localhost:3000/`

### Available Scripts

- `npm run docusaurus` - Direct Docusaurus CLI access
- `npm run swizzle` - Customize Docusaurus theme components
- `npm run write-translations` - Generate translation files
- `npm run write-heading-ids` - Auto-generate heading IDs

---

## Article Creation Guidelines

### General Article Structure

Every article **MUST** follow this structure:

```markdown
---
# Docusaurus metadata (YAML frontmatter)
id: section-name-article-slug
slug: /section-name/article-slug
category: カテゴリ名
title: 記事タイトル
tags: [tag1, tag2, tag3]
description: 記事の説明文
image: img/jpg/ateliers-dev-section-name.jpg
---

import FullHeader from '@site/src/components/IntegratedArticleComponents/FullHeader';
import FullFooter from '@site/src/components/IntegratedArticleComponents/FullFooter';
// Import other components as needed

# 記事タイトル

<FullHeader
  slug="/section-name/article-slug"
  title="記事タイトル | ateliers.dev"
  created="YYYY/MM/DD"
  updated="YYYY/MM/DD"/>

---

## 記事内容

本文をここに記述...

---

<FullFooter
  slug="/section-name/article-slug"
  title="記事タイトル | ateliers.dev"/>
```

### Critical Rules for All Articles

1. **YAML Frontmatter**
   - Always placed at the very beginning
   - Reference `.template.md` in each section for required fields
   - Uncommented fields are mandatory

2. **Import Statements**
   - Placed immediately after YAML frontmatter
   - Always import `FullHeader` and `FullFooter`
   - Import optional components as needed: `SeriesList`, `RelatedArticles`

3. **FullHeader Component**
   - Placed immediately after the H1 title
   - `slug` must match the file path
   - `title` must end with " | ateliers.dev"
   - Include `created` date (YYYY/MM/DD format)
   - Include `updated` date when article is modified

4. **FullFooter Component**
   - Placed at the very end of the article
   - Must match `slug` and `title` from FullHeader

5. **Title Format**
   - Format: `記事タイトル | ateliers.dev`
   - Must be consistent across frontmatter and components

### Section-Specific Guidelines

#### GitHub Guidelines (`docs/github-guidelines/`)

**Reference**: `ai-guides/github-guidelines-instruction.md`

- **Template**: `docs/github-guidelines/.template.md`
- **Category Placement**: Must be in `"id": "github-guidelines"` category
- **Update Requirements**:
  1. Update `src/data/ateliers-dev_content-list.json`
  2. Update `sidebars.ts` → `githubGuidelinesSidebar`
  3. Update `docs/github-guidelines/index.md`
  4. Ensure category names, order, and hierarchy match between JSON and sidebars

#### Technical Policies (`docs/technical-policies/`)

**Reference**: `ai-guides/technical-policies-instruction.md`

- **Template**: `docs/technical-policies/.template.md`
- **Category Placement**: Must be in `"id": "technical-policies"` category
- **Update Requirements**:
  1. Update `src/data/ateliers-dev_content-list.json`
  2. Update `sidebars.ts` → `technicalPoliciesSidebar`
  3. Update `docs/technical-policies/index.md`
  4. Maintain consistent category structure

#### Technical Notebook (`docs/technical-notebook/`)

**Reference**: `ai-guides/technical-notebook-instruction.md`

- **Template**: `docs/technical-notebook/.template.md`
- **Category Placement**: Must be in `"id": "technical-notebook"` category
- **AI-Related Articles**: MUST be placed in technical-notebook, NOT site-guidance
- **Update Requirements**:
  1. Update `src/data/ateliers-dev_content-list.json`
  2. Update `sidebars.ts` → `technicalNotebookSidebar`
  3. Update `docs/technical-notebook/index.md` → Update `updated` date in DateAndCopyUrlHeader
  4. Optionally update `docs/site-guidance/index.md` and `docs/site-guidance/planned-content-and-update-history.md`

#### Profiles (`docs/profiles/`)

**Reference**: `ai-guides/profile-instruction.md`

- **Template**: `docs/profiles/.template.md`
- **Update Requirements**:
  1. Update `src/data/ateliers-dev_content-list.json`
  2. Update `sidebars.ts` → `profileSidebar`

#### FAQ (`docs/faq.md`)

**Reference**: `ai-guides/faq-instruction.md`

- Single-page FAQ format
- Update according to instruction file

### Critical: Maintaining List Consistency

**ABSOLUTELY CRITICAL**: When adding/updating articles, `src/data/ateliers-dev_content-list.json` and `sidebars.ts` **MUST** have:
- **Identical category names**
- **Identical article order**
- **Identical hierarchy structure**

Mismatch between these files creates user experience issues and breaks automation.

---

## Component Architecture

### Core Components

#### FullHeader

**Location**: `src/components/IntegratedArticleComponents/FullHeader.tsx`

**Purpose**: Displays article metadata at the top of each page

**Props**:
```typescript
{
  slug: string;        // URL slug (e.g., "/technical-notebook/article-name")
  title: string;       // Full title with " | ateliers.dev"
  created: string;     // Creation date "YYYY/MM/DD"
  updated?: string;    // Update date "YYYY/MM/DD" (optional)
}
```

#### FullFooter

**Location**: `src/components/IntegratedArticleComponents/FullFooter.tsx`

**Purpose**: Provides footer with navigation and sharing options

**Props**:
```typescript
{
  slug: string;        // Must match FullHeader slug
  title: string;       // Must match FullHeader title
}
```

#### SeriesList

**Location**: `src/components/SeriesList/index.tsx`

**Purpose**: Displays navigation for article series

**Usage**: Import and use when articles are part of a series

#### RelatedArticles

**Location**: `src/components/RelatedArticles/index.tsx`

**Purpose**: Shows related content links

**Usage**: Import and use to cross-reference related articles

### Custom Configuration

**Location**: `customConfig.ts`

Contains site-wide custom configuration:

```typescript
{
  sitePurposeTitle: "what is this.",
  sitePurposeDescription: "ateliers.dev は、個人のテクニカルポートフォリオとして...",
  siteShortDescription: "ateliers.dev は、個人のテクニカルポートフォリオとして..."
}
```

---

## Git Workflow

### Branch Strategy

Reference: `docs/github-guidelines/branch-strategy.md`

**Main Branches**:

1. **`master`** - Production/release branch
   - Direct commits allowed for minor fixes and content updates
   - Triggers automatic deployment to GitHub Pages

2. **`feature`** - Development branch
   - Used for major changes, plugin additions, functionality updates
   - Merged to `master` after testing

3. **`gh-pages`** - Deployment branch
   - Auto-generated by GitHub Actions
   - Contains built static files
   - **Never commit directly to this branch**

### Development Workflow

For Content Updates (Minor):
```bash
# Work directly on master
git checkout master
# Make changes
git add .
git commit -m "記事追加: [記事タイトル]"
git push origin master
```

For Feature Development (Major):
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "機能追加: [機能説明]"

# Push and create PR
git push origin feature/new-feature
# Create PR to merge into master
```

### Commit Message Guidelines

- Use Japanese for commit messages
- Be descriptive and clear
- Examples:
  - `記事追加: GitHub Actions でテストを実行`
  - `機能修正: サイドバーナビゲーションの改善`
  - `ドキュメント更新: README の開発環境情報を更新`

---

## Build and Deployment

### GitHub Actions Workflow

**File**: `.github/workflows/deploy.yml`

**Trigger**: Push to `master` branch

**Process**:
1. Checkout repository with submodules
2. Initialize submodules recursively
3. Setup Node.js v20
4. Install dependencies (`npm install`)
5. Build site (`npm run build`)
6. Deploy to `gh-pages` branch
7. Publish to custom domain (ateliers.dev)

**Secrets Required**:
- `GH_TOKEN_DEPLOY` - Personal Access Token for deployment

### Build Output

- Build directory: `./build/`
- Contains static HTML, CSS, JS, and assets
- Served from `gh-pages` branch via GitHub Pages

### CNAME Configuration

Custom domain configured via `CNAME` file in root:
```
ateliers.dev
```

---

## Key Conventions

### File Naming

#### Markdown Files

**Pattern**: `kebab-case.md`

Examples:
- `branch-strategy.md`
- `repository-naming-policy.md`
- `pat-update-guide.md`

#### Component Files

**Pattern**: `PascalCase.tsx` or `index.tsx` with CSS files as `kebab-case.css`

Examples:
- `FullHeader.tsx`
- `index.tsx` + `series-list.css`

#### Document IDs

**Pattern**: `section-name-article-name`

Examples:
- `github-guidelines-branch-strategy`
- `technical-notebook-dotnet-github-actions-automatic-test-execution`

Must be globally unique across all documents.

### URL Slugs

**Pattern**: `/section-name/subsection/article-name`

Examples:
- `/github-guidelines/branch-strategy`
- `/technical-notebook/dotnet/http-protocol/get-method`

Must match file path structure under `/docs/`.

### Image Organization

**Location**: `static/img/`

**Subdirectories**:
- `ico/` - Favicons
- `jpg/` - JPEG images
- `svg/` - SVG graphics
- Article-specific images in docs subdirectories

**Naming**: Descriptive kebab-case

Example:
- `ateliers-dev-social-card.jpg`
- `ateliers-dev-technical-notebook.jpg`

### Tags

**Format**: Lowercase, hyphenated

Examples:
- `github-actions`
- `dotnet`
- `http-protocol`
- `technical-notebook`

Tags are defined in frontmatter and used for categorization and search.

### Date Format

**Standard Format**: `YYYY/MM/DD`

Examples:
- `2024/05/18`
- `2025/11/22`

Used in:
- FullHeader `created` and `updated` props
- DateAndCopyUrlHeader components
- Update history documentation

---

## AI Assistant Instructions

### Before Making Changes

1. **Read Relevant AI Guide**
   - Always check `ai-guides/` for the section you're working on
   - Follow templates and required structure exactly

2. **Check Existing Files**
   - Review `.template.md` in the target section
   - Look at existing articles for reference
   - Verify current `sidebars.ts` and content-list structure

3. **Understand Context**
   - Read section `index.md` to understand section purpose
   - Check `writing-guide.md` if available
   - Review related articles

### When Creating Articles

1. **Use Correct Template**
   - Copy from `.template.md` in target section
   - Fill in all required frontmatter fields
   - Remove commented optional fields if not needed

2. **Follow Component Structure**
   - Import required components
   - Include FullHeader with correct props
   - Include FullFooter with matching props
   - Add SeriesList if part of a series

3. **Update All Indices**
   - Add to `src/data/ateliers-dev_content-list.json` in correct category
   - Add to `sidebars.ts` in corresponding sidebar
   - Update section `index.md`
   - Maintain consistent order and hierarchy

4. **Verify Consistency**
   - Category names match between JSON and sidebars
   - Order is identical
   - Hierarchy structure is same
   - All links are valid

### When Updating Articles

1. **Update Metadata**
   - Increment `updated` date in FullHeader
   - Update frontmatter if needed
   - Update description if content significantly changed

2. **Update Indices**
   - If title/description changed, update JSON
   - If moved/reorganized, update sidebars
   - Update section index if link changed
   - Update parent index pages with new `updated` date

### Common Pitfalls to Avoid

1. **Category Misplacement**
   - ❌ Don't add AI articles to site-guidance
   - ✅ Add AI articles to technical-notebook

2. **Component Mismatch**
   - ❌ Don't use different slug/title in Header vs Footer
   - ✅ Ensure exact match between FullHeader and FullFooter

3. **Missing Updates**
   - ❌ Don't update only sidebars or only content-list
   - ✅ Always update both to maintain consistency

4. **Incorrect Dates**
   - ❌ Don't use `YYYY-MM-DD` format
   - ✅ Use `YYYY/MM/DD` format (slashes, not hyphens)

5. **Template Violations**
   - ❌ Don't skip FullHeader or FullFooter
   - ✅ Every article must have both components

### Code Style

- **TypeScript**: Follow existing patterns in config files
- **Markdown**: Use proper heading hierarchy (H1 → H2 → H3)
- **JSX in MD**: Close all tags properly, use proper props
- **Indentation**: 2 spaces for JSON, 2 spaces for TS/JS
- **Line Length**: Aim for readability, no strict limit

### Testing Before Commit

1. **Build Check**
   ```bash
   npm run build
   ```
   Must complete without errors

2. **Type Check**
   ```bash
   npm run typecheck
   ```
   Must pass without errors

3. **Local Preview**
   ```bash
   npm start
   ```
   Verify changes render correctly

4. **Link Verification**
   - Test all internal links
   - Verify sidebar navigation
   - Check article appears in indices

---

## Additional Resources

### Official Documentation

- **Docusaurus**: https://docusaurus.io/
- **React**: https://react.dev/
- **MDX**: https://mdxjs.com/

### Repository-Specific Docs

- **AI Guides Index**: `ai-guides/README.md`
- **Site README**: `README.md`
- **Branch Strategy**: `docs/github-guidelines/branch-strategy.md`
- **Site Guidance**: `docs/site-guidance/index.md`

### Important Files Reference

| Purpose | File Path |
|---------|-----------|
| Main config | `docusaurus.config.ts` |
| Sidebar config | `sidebars.ts` |
| Content metadata | `src/data/ateliers-dev_content-list.json` |
| Custom config | `customConfig.ts` |
| Deployment workflow | `.github/workflows/deploy.yml` |
| Package info | `package.json` |

---

## Version Information

**Last Updated**: 2025/11/23
**Docusaurus Version**: 3.9.2
**Node.js Version**: 20.7.0
**Repository Owner**: yuu-git
**GitHub**: https://github.com/yuu-git/ateliers-dev

---

## Notes for AI Assistants

This document serves as your primary reference when working with the ateliers-dev repository. Key priorities:

1. **Always prioritize consistency** - Match existing patterns exactly
2. **Reference ai-guides/** - These contain authoritative instructions
3. **Maintain sync** - Keep content-list.json and sidebars.ts aligned
4. **Follow templates** - Use .template.md files as foundation
5. **Test thoroughly** - Build and preview before committing
6. **Be precise** - Small errors in structure can break navigation

When in doubt, examine existing articles in the same section for reference patterns.

---

*This document is maintained to reflect the current state of the repository. When making significant structural changes, update this file accordingly.*
