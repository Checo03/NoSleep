# NoSleep Studio - Sitio Web

Sitio web estático para NoSleep Studio - Diseño Industrial y consultoría en diseño.

## 🚀 Estructura del Proyecto

```
NoSleep/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos principales
├── js/
│   └── main.js        # JavaScript principal
├── images/            # Imágenes del sitio
└── README.md
```

## 📝 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ HTML5 semántico
- ✅ CSS moderno con variables CSS
- ✅ JavaScript vanilla
- ✅ Optimizado para GitHub Pages

## 🌐 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos al repositorio
3. Ve a Settings > Pages
4. En "Source", selecciona la rama `main` y carpeta `/ (root)`
5. Guarda y espera unos minutos
6. Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repositorio/`

## 🔧 Configuración futura con Netlify CMS

Para agregar Netlify CMS en el futuro:

1. Crear carpeta `admin/` con:
   - `index.html` (interfaz de Netlify CMS)
   - `config.yml` (configuración del CMS)

2. Configurar `config.yml` para editar contenido

3. Desplegar en Netlify conectando el repositorio de GitHub

## 📷 Imagen Hero

⚠️ **Importante**: Coloca tu imagen principal en `images/producto-hero.jpg`

Recomendaciones:
- Formato: JPG o WebP
- Dimensiones: 1200x1000px aproximadamente
- Peso: menos de 500KB para mejor rendimiento

## 🎨 Personalización

### Colores
Edita las variables CSS en `css/style.css`:
```css
:root {
    --color-primary: #b8e82f;  /* Verde del logo */
    --color-text: #333333;      /* Texto principal */
    --color-text-light: #666666; /* Texto secundario */
}
```

### Contenido
- Edita el texto en `index.html`
- Reemplaza las imágenes en la carpeta `images/`

## 🛠️ Próximos pasos

- [ ] Agregar imágenes reales
- [ ] Crear página de Proyectos
- [ ] Crear página de Conócenos
- [ ] Crear página de Contacto
- [ ] Configurar Netlify CMS
- [ ] Optimizar imágenes
- [ ] Agregar meta tags SEO


