import profilePhoto from "./../images/profile-photo.jpg";

export type ProfileInfoType = {
    name: string
    dateOfBirth: string
    profilePhoto: string
    profileBanner: string

}
export type PostsListType = {
    id: string
    profilePhoto: string
    postContent: string
    likesCount: number
}
export type FriendType = {
    id: string,
    name: string,
    profilePhoto: string
}
export type MessageItemType = {
    id: string
    message: string
}


export type DialogItemType = {
    id: string
    name: string
}


export type MenuItemsType = {
    id: string
    link: string
    title: string
}

export type ProfilePageType = {
    postsData: Array<PostsListType>
    profileInfo: ProfileInfoType
}

export type DialogsPageType = {
    messagesData: Array<MessageItemType>
    dialogsData: Array<DialogItemType>
}


export type SidebarType = {
    menuItems: Array<MenuItemsType>
    friendsList: Array<FriendType>
}

export type StateType = {
    sidebar: SidebarType
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export let state: StateType = {
    sidebar: {
        menuItems: [
            {id: "1", link: "/profile", title: "Profile"},
            {id: "2", link: "/dialogs", title: "Dialogs"},
            {id: "3", link: "/settings", title: "Settings"},
        ],
        friendsList: [
            {id: "1", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "2", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "1", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "2", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "1", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "2", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "1", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "2", name: 'Bekzod', profilePhoto: profilePhoto},
            {id: "2", name: 'Bekzod', profilePhoto: profilePhoto},
        ]
    },

    profilePage: {
        postsData: [
            {
                id: "1",
                profilePhoto: profilePhoto,
                postContent: "Lorqqqqqqem ipsum dolor sit amet, consectetur adipisicing elit.",
                likesCount: 1
            },
            {
                id: "2",
                profilePhoto: profilePhoto,
                postContent: "Lorconsectetur adipisicing elit.",
                likesCount: 11

            }
        ],
        profileInfo: {
            name: "Bekzod",
            dateOfBirth: "18.07.2001",
            profilePhoto: profilePhoto,
            profileBanner: "https://swall.teahub.io/photos/small/35-352828_dark-landscape-wallpaper-hd.jpg"
        }
    },
    dialogsPage: {
        messagesData: [
            {id: '1', message: 'Helloo!'},
            {id: '2', message: 'Hey Bekzod!'}
        ],
        dialogsData: [
            {id: '1', name: 'Bekzod'},
            {id: '2', name: 'Ibrohim'}
        ]
    }

}