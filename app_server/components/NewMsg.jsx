const React = require('react');

class NewMSg extends React.Component{
    constructor(props){
        super(props);
        this.handleText = this.handleText.bind(this);
        this.addMessage = this.handleMessage.bind(this);
        this.setState({
            name:"",
            msg:""
        });
       
    }
    addMessage = (event) =>{
        event.preventDefault();

        //save state var to local
        let name = this.state.name;
        let msg = this.state.msg;

        //make sure  neither field is empty
        if(!name || !msg){
            return console.error('Name and/or Msg cannnot be empty');
        }

        //trim any whitespace
        name = name.trim(); msg = msg.trim();

        //pass control to MsgBoard so it can make the API Call and update messages there 
        this.props.addMsgCallback({name: name, msg:msg});
    }
    handleText = (event)=>{
        if(event.target.id == 'name'){
            this.setState({
                name: event.target.value
            });
        } else{
            this.setState({
                msg: event.target.value
            });
        }

    }
    render() {
        return (
          <form onSubmit={this.addMessage}>
            <div className="form-group">
              <div className="row">
                <label htmlFor="name"
                  className="col-3 col-form-label">
                  Enter Name:
                </label>
                <label htmlFor="msg"
                  className="col-7 col-form-label">
                  Enter Message:
                </label>
              </div>
              <div className="row">
                <div className="col-3">
                  <input id="name" type="text className="form-control"
                    placeholder="Your Name" value={this.state.name}
                    onChange={this.handleText}
                  />
                </div>
                <div className="col-7">
                  <input id="msg" type="text" className="form-control"
                    placeholder="Your Message" value={this.state.msg}
                    onChange={this.handleText}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-primary">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
        )
      }
}

module.exports = NewMsg