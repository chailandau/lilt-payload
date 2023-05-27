import { CollectionConfig, GlobalConfig } from "payload/types"

export const groupCollections = (collections: CollectionConfig[], group: string): CollectionConfig[] => {
    return collections.map(collection => {
        return {
            ...collection,
            admin: {
                ...collection.admin,
                group
            },
        }
    })
}

export const groupGlobals = (globals: GlobalConfig[], group: string): GlobalConfig[] => {
    return globals.map(global => {
        return {
            ...global,
            admin: {
                ...global.admin,
                group
            },
        }
    })
}