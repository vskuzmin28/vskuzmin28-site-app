import { createRouter, createWebHistory, type RouteMeta } from 'vue-router'
import HomeView from '../views/HomeView.vue'

interface CustomRouteMeta extends RouteMeta {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { 
        title: 'Виталий Кузьмин | Руководитель IT проектов',
        description: 'Руководитель IT проектов с более чем 5-летним опытом управления веб-разработкой. Управление командами, Agile, Scrum, полный цикл разработки.',
        keywords: 'руководитель IT проектов, управление проектами, веб-разработка, Vue.js, TypeScript, Agile, Scrum, менеджер проектов',
        ogTitle: 'Виталий Кузьмин | Руководитель IT проектов',
        ogDescription: 'Руководитель IT проектов с более чем 5-летним опытом управления веб-разработкой',
        ogImage: '../assets/images/og-image.png',
        ogUrl: 'https://vskuzmin28.vitosh.ru'
      } as CustomRouteMeta,
      component: HomeView
    }
  ]
})

function updateSEOTags(meta: CustomRouteMeta) {
  // Title
  document.title = meta.title || 'Виталий Кузьмин | Руководитель IT проектов'
  
  // Description
  let descriptionMeta = document.querySelector('meta[name="description"]')
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta')
    descriptionMeta.setAttribute('name', 'description')
    document.head.appendChild(descriptionMeta)
  }
  descriptionMeta.setAttribute('content', meta.description || 'Руководитель IT проектов с опытом управления веб-разработкой')
  
  // Keywords
  let keywordsMeta = document.querySelector('meta[name="keywords"]')
  if (!keywordsMeta) {
    keywordsMeta = document.createElement('meta')
    keywordsMeta.setAttribute('name', 'keywords')
    document.head.appendChild(keywordsMeta)
  }
  keywordsMeta.setAttribute('content', meta.keywords || 'руководитель IT проектов, управление проектами, веб-разработка')
  
  // Open Graph
  updateMetaTag('property', 'og:title', meta.ogTitle || meta.title)
  updateMetaTag('property', 'og:description', meta.ogDescription || meta.description)
  updateMetaTag('property', 'og:image', meta.ogImage || '/images/og-default.jpg')
  updateMetaTag('property', 'og:url', meta.ogUrl || window.location.href)
  updateMetaTag('property', 'og:type', 'website')
  updateMetaTag('property', 'og:site_name', 'Виталий Кузьмин')
}

function updateMetaTag(attr: string, name: string, content?: string) {
  if (!content) return
  
  let metaTag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(attr, name)
    document.head.appendChild(metaTag)
  }
  metaTag.setAttribute('content', content)
}

router.beforeEach((to, from, next) => {
  const meta = to.meta as CustomRouteMeta
  updateSEOTags(meta)
  next()
})

export default router