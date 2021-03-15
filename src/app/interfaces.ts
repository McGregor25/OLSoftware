export interface MENU_APP {
    texto: string;
    icono: string;
    url?: string;
    abierto?: boolean;
    acordeon?: SUB_ITEM[];
    height?: number;
    activo: boolean;
}

export interface SUB_ITEM {
    texto: string;
    letra: string;
    url?: string;
}
