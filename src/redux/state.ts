import profilePhoto from "./../images/profile-photo.jpg";
import {rerenderEntireTree} from "../render";

export type ProfileInfoType = {
    name: string
    dateOfBirth: string
    profilePhoto: string
    profileBanner: string

}
export type PostsListType = {
    id: number
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
    id: number
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
export type PostsType = {
    newPost: string
    postsData: Array<PostsListType>
}

export type ProfilePageType = {
    posts: PostsType
    profileInfo: ProfileInfoType
}

export type DialogsPageType = {
    newMessage: string
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
        posts: {
            newPost: '',
            postsData: [
                {
                    id: 1,
                    profilePhoto: profilePhoto,
                    postContent: "Lorqqqqqqem ipsum dolor sit amet, consectetur adipisicing elit.",
                    likesCount: 1
                },
                {
                    id: 2,
                    profilePhoto: profilePhoto,
                    postContent: "Lorconsectetur adipisicing elit.",
                    likesCount: 11

                }
            ],
        },
        profileInfo: {
            name: "Bekzod",
            dateOfBirth: "18.07.2001",
            profilePhoto: profilePhoto,
            profileBanner: "https://swall.teahub.io/photos/small/35-352828_dark-landscape-wallpaper-hd.jpg"
        }
    },
    dialogsPage: {
        newMessage: '',
        messagesData: [
            {id: 1, message: 'Helloo!'},
            {id: 2, message: 'Hey Bekzod!'}
        ],
        dialogsData: [
            {id: '1', name: 'Bekzod'},
            {id: '2', name: 'Ibrohim'},
            {id: '1', name: 'Bekzod'},
            {id: '2', name: 'Ibrohim'},
            {id: '1', name: 'Bekzod'},
            {id: '2', name: 'Ibrohim'},
            {id: '1', name: 'Bekzod'},
            {id: '2', name: 'Ibrohim'}
        ]
    }

}

export const addPost = (newPostText: string) => {

    let newPost: PostsListType = {
        id: new Date().getTime(),
        profilePhoto: profilePhoto,
        postContent: newPostText,
        likesCount: 0
    };
    state.profilePage.posts.postsData.unshift(newPost);
    rerenderEntireTree(state);
}

export const sendMessage = (newMessageText: string) => {

    let newMessage: MessageItemType = {
        id: new Date().getTime(),
        message: newMessageText
    };
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state);
}

export const changeNewMessage = (newMessageText: string) => {
    state.dialogsPage.newMessage = newMessageText;
    rerenderEntireTree(state)
}

export const changeNewPost = (newPostText: string) => {
    state.profilePage.posts.newPost = newPostText;
    rerenderEntireTree(state)
}

