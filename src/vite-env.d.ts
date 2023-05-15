/// <reference types="vite/client" />
// These variables should be definied in a .env file in the root of this project
interface ImportMetaEnv {
    readonly VITE_SHOW_FILES_ROOT_URL: string,
    readonly VITE_SHOW_FILES_API_URL: string,
    readonly VITE_APP_TITLE: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}