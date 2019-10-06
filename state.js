var state = class State{
    constructor(user_id){
       this.user_id =  user_id;
       this.state = '';
    }
    check_state(state){
        console.log(state)

    }
};
module.exports.State = state;