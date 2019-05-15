import { UserSetting, User, Role } from '../../models';

const userSetting: UserSetting[] = [
    {userid: '1234', key: 'autorefreshscreenshot', value: 'true'},
    {userid: '1234', key: 'defaultview', value: 'list'},
    {userid: '1234', key: 'theme', value: 'dark'},
    {userid: '4321', key: 'autorefreshscreenshot', value: 'false'},
    {userid: '4321', key: 'defaultview', value: 'title'},
    {userid: '4321', key: 'theme', value: 'light'}
  ];

export const UserData: User[] = [
    { id: 1234, role: Role.User, username: 'j@ello.com', password: 'password1', firstName: 'Yum', lastName: 'Yay', email:"j@ello.com", token: null, expiresIn: 604800000, settings: userSetting.filter(usersetting => usersetting.userid === '1234')},
    { id: 4321, role: Role.Admin, username: 'sidekick@totheFace.com', password: 'password1', firstName: 'Chuck', lastName: 'Norris', email:"sidekick@totheFace.com", token: null, expiresIn: 604800000, settings: userSetting.filter(usersetting => usersetting.userid === '4321')}
];