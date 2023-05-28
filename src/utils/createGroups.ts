import { CollectionAdminOptions } from "payload/dist/collections/config/types"

import { CollectionConfig, GlobalConfig } from "payload/types"

export const createGroup = (allGroups: CollectionConfig[] | GlobalConfig[], group: string) => {
    return allGroups.map((indivGroup: { admin?: CollectionAdminOptions }) => {
        return {
            ...indivGroup,
            admin: {
                ...indivGroup.admin,
                group
            },
        }
    })
}