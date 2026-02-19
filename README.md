# Construcciones y Terminaciones JC — Landing Page

Landing page para **Construcciones y Terminaciones JC** construida con **Vue 3**, **Vite**, **Tailwind CSS** y **Firebase**.

## Requisitos

- Node.js 18+
- Cuenta en [Firebase](https://console.firebase.google.com)

## Instalación

```bash
npm install
```

## Configurar Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com).
2. Copia el archivo de ejemplo de variables de entorno:

   ```bash
   cp .env.example .env
   ```

3. En Firebase Console → Configuración del proyecto → Tus apps → Web, copia los valores del objeto `firebaseConfig` y rellena `.env`:

   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   VITE_FIREBASE_MEASUREMENT_ID=...   (opcional, para Analytics)
   ```

4. Para usar **Firebase Hosting**, asocia el proyecto:

   ```bash
   npx firebase login
   npx firebase use landing-construciones-jc
   ```

   y actualiza el `default` en `.firebaserc` con tu ID de proyecto.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build para producción

```bash
npm run build
```

Los archivos quedan en la carpeta `dist/`.

## Desplegar en Firebase Hosting

### Desde tu máquina

1. Build del proyecto: `npm run build`
2. Despliega: `npx firebase deploy` (tras `npx firebase login` y `npx firebase use landing-construciones-jc`).

### Desde GitHub Actions (CI)

El flujo automático con `firebase init` puede fallar con *"Key creation is not allowed on this service account"*. En ese caso configura el despliegue con una **cuenta de servicio propia**:

1. **Crear la cuenta de servicio**
   - Entra en [Google Cloud Console](https://console.cloud.google.com) y selecciona el proyecto **landing-construciones-jc**.
   - IAM y administración → Cuentas de servicio → Crear cuenta de servicio.
   - Nombre (ej.: `github-actions-hosting`), Crear y continuar.
   - En “Conceder acceso”, añade el rol **Firebase Hosting Admin** (o “Administrador de Firebase Hosting”).
   - Finalizar.

2. **Crear una clave JSON**
   - En la lista de cuentas de servicio, abre la que creaste → pestaña **Claves**.
   - Añadir clave → Crear clave → JSON → Crear. Se descargará un archivo `.json`.

3. **Añadir el secret en GitHub**
   - Repositorio → Settings → Secrets and variables → Actions.
   - New repository secret.
   - Nombre: `FIREBASE_SERVICE_ACCOUNT`.
   - Valor: **todo el contenido** del archivo JSON descargado (copiar y pegar).
   - Guardar.

4. El workflow `.github/workflows/firebase-hosting.yml` se ejecuta en cada push a `main` y desplegará la carpeta `dist/` a Firebase Hosting.

## Dominio: construccionesjc.cl

El sitio está publicado en **https://construccionesjc.cl** (dominio personalizado en Firebase Hosting).

### Conectar el dominio en Firebase

1. Entra en [Firebase Console](https://console.firebase.google.com/project/landing-construciones-jc/hosting) → **Hosting**.
2. En “Dominios”, haz clic en **Agregar dominio personalizado**.
3. Escribe **construccionesjc.cl** y sigue los pasos.
4. Firebase te mostrará registros DNS:
   - **Tipo A**: apunta `construccionesjc.cl` a las IP que indique Firebase.
   - **Tipo A** (o CNAME si aplica): para `www.construccionesjc.cl` si quieres que también funcione.
5. Crea esos registros en el panel de tu proveedor de dominio (donde compraste construccionesjc.cl).
6. La verificación puede tardar unos minutos u horas. Cuando el estado pase a “Conectado”, el sitio se servirá en **https://construccionesjc.cl** (Firebase gestiona el SSL).

Mientras tanto el sitio sigue disponible en https://landing-construciones-jc.web.app.

## Estructura del proyecto

- `src/App.vue` — Componente raíz y layout.
- `src/components/` — Componentes de la landing (Header, Hero, Servicios, Portafolio, Contacto, Footer).
- `src/assets/main.css` — Estilos globales y Tailwind.
- `src/firebase.js` — Inicialización de Firebase (Firestore y Analytics). La app funciona aunque no configures `.env`.
- `src/composables/useReveal.js` — Animaciones de revelado al hacer scroll.

La app puede ejecutarse sin configurar Firebase; solo necesitas las variables de entorno para Analytics o para guardar datos en Firestore (por ejemplo, un formulario de contacto).
