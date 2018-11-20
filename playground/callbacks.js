var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram',
        email: 'rodrigo@zooft.company'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);

};

getUser(31, (userObject) => {
    console.log(userObject);
});