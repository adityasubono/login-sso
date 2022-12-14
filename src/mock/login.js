const tokens = {
  admin: "admin-token",
  guest: "guest-token",
  editor: "editor-token",
  teacher: "teacher-token",
  parent: "parent-token",
  student: "student-token",
  admission: "admission-token",
  principal: "principal-token",
  librarian: "librarian-token",
};

const users = {
  "admin-token": {
    id: "admin",
    role: "admin",
    name: "Admin",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
    description:"Role Admin",
  },
  "editor-token": {
    id: "editor",
    role: "editor",
    name: "Editor",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Editor",
  },
  "guest-token": {
    id: "guest",
    role: "guest",
    name: "Guest",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Guest",
  },
  "teacher-token": {
    id: "teacher",
    role: "teacher",
    name: "Teacher",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Teacher",
  },
  "student-token": {
    id: "student",
    role: "student",
    name: "Student",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Student",
  },
  "parent-token": {
    id: "parent",
    role: "parent",
    name: "Parent",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Parent",
  },
  "principal-token": {
    id: "principal",
    role: "principal",
    name: "Principal",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Principal",
  },
  "librarian-token": {
    id: "librarian",
    role: "librarian",
    name: "Librarian",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Librarian",
  },
  "admission-token": {
    id: "admission",
    role: "admission",
    name: "Admission",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Role Admission",
  },
};

export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        status: 1,
        message: "Incorrect username and password",
      };
    }
    return {
      status: 0,
      token,
    };
  },
  userInfo: (config) => {
    const token = config.body;
    const userInfo = users[token];
    if (!userInfo) {
      return {
        status: 1,
        message: "Login Failed ",
      };
    }
    return {
      status: 0,
      userInfo,
    };
  },
  getUsers: () => {
    return {
      status: 0,
      users: Object.values(users),
    };
  },
  deleteUser: (config) => {
    const { id } = JSON.parse(config.body);
    const token = tokens[id];
    if (token) {
      delete tokens[id];
      delete users[token];
    }
    return {
      status: 0,
    };
  },
  editUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    const token = tokens[id];
    if (token) {
      users[token] = { ...users[token], ...data };
    }
    return {
      status: 0,
    };
  },
  ValidatUserID: (config) => {
    const userID = config.body;
    const token = tokens[userID];
    if (token) {
      return {
        status: 1,
      };
    } else {
      return {
        status: 0
      };
    }
  },
  addUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    tokens[id] = `${id}-token`
    users[`${id}-token`] = {
      ...users["guest-token"],
      ...data
    }
    return {
      status: 0,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: "success",
    };
  },
};
