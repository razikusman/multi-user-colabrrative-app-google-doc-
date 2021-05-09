Messages = new Mongo.Collection("messages");
if (Meteor.isClient){


    Template.nicknameForm.events({
        'click .js-set-nickname':function(){
            var nickname = $('#nickname-input').val();
            Session.set("nickname" , nickname);
        }
    });

    Template.messageForm.events({
        // this event listener is triggered when they click on
        // the post! button on the message form template

        'click .js-save-message':function(event){
            var messageText = $('#message-text-input').val();
            var messageNickname = Session.get('nickname');
            var message = {messageText:messageText,
                            nickname:messageNickname,
                            createdOn:new Date()};
            Messages.insert(message);

        }
    });

    Template.messageForm.events({
        // this event listener is triggered when they click on
        // the post! button on the message form template

        'click .js-clear-message':function(event){
            sessionStorage.clear();

        }
    });

    Template.header.helpers({
        // HERE is another one for you - can you
        // complete the template helper for the 'header' template
        // called 'nickname' that
        // returns the nickname from the Session variable?, if they have set it
        nickname:function(){
            var nickname = Session.get("nickname");
            return nickname;
            
        },
    });
    
       

    Template.messageList.helpers({
        // this helper provides the list of messages for the
        // messgaeList template
        messages:function(){
            return Messages.find({});
        }
    });

}
