!function(e){function t(t){for(var s,i,l=t[0],o=t[1],c=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(m&&m(t);d.length;)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={2:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/packs/";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=o;r.push([61,0]),a()}({61:function(e,t,a){"use strict";a.r(t);a(20);var s=a(7),n=a(17),r=a(1),i=a(0),l=a.n(i),o=a(3),c=a(4);class m extends l.a.Component{constructor(e){super(e),this.state={}}render(){return l.a.createElement("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(o.b,{className:"navbar-item",to:"/"},"XSUCON Portal")),l.a.createElement("div",{className:"navbar-menu is-active"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(o.b,{className:"navbar-item",to:"/teams"},"チーム一覧")),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},this.renderNavbarContestButton(),this.renderNavbarLoginButtons()))))))}renderNavbarContestButton(){var e,t;if(!this.props.session.contestant)return(null===(t=this.props.session.contest)||void 0===t?void 0:t.status)===r.xsuportal.proto.resources.Contest.Status.REGISTRATION?l.a.createElement(o.b,{className:"button is-light",to:"/registration"},"参加登録"):null;switch(null===(e=this.props.session.contest)||void 0===e?void 0:e.status){case r.xsuportal.proto.resources.Contest.Status.REGISTRATION:case r.xsuportal.proto.resources.Contest.Status.STANDBY:return l.a.createElement(o.b,{className:"button is-light",to:"/registration"},"参加登録/修正");case r.xsuportal.proto.resources.Contest.Status.STARTED:case r.xsuportal.proto.resources.Contest.Status.FINISHED:return l.a.createElement("a",{className:"button is-light",href:"/contestant"},"競技参加者向けページ")}}renderNavbarLoginButtons(){return this.props.session.contestant?l.a.createElement(o.b,{className:"button is-light",to:"/logout"},"ログアウト"):l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{className:"button is-light",to:"/signup"},"アカウント作成"),l.a.createElement(o.b,{className:"button is-light",to:"/login"},"ログイン"))}}var u=a(2);class d extends l.a.Component{constructor(e){super(e);new URLSearchParams(document.location.search);this.state={teamList:null,error:null}}componentDidMount(){this.updateTeamList()}async updateTeamList(){try{const e=await this.props.client.listTeams();this.setState({teamList:e})}catch(e){this.setState({error:e})}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",{className:"title is-1"},"参加チームリスト")),l.a.createElement("main",null,this.renderError(),this.renderTeamList()))}renderError(){if(this.state.error)return l.a.createElement(u.a,{error:this.state.error})}renderTeamList(){return this.state.teamList?l.a.createElement(l.a.Fragment,null,this.state.teamList.teams.map((e,t)=>this.renderTeam(e,t))):l.a.createElement("p",null,"Loading...")}renderTeam(e,t){return l.a.createElement("div",{className:"card mt-4",key:t},l.a.createElement("div",{className:"card-content"},l.a.createElement("p",{className:"title is-5"},e.name),e.isStudent?l.a.createElement("p",{className:"subtitle"},l.a.createElement("span",{className:"tag is-info"},"学生チーム")):null,l.a.createElement("ul",null,e.memberNames.map((e,t)=>l.a.createElement("li",{key:t},e)))))}}var h=a(21),p=a(18),E=a(22),g=a(26),N=a(25);const v=({session:e,client:t})=>{var a;const[s,n]=l.a.useState(!1),[r,i]=l.a.useState(null),[o,c]=l.a.useState(null),[m,d]=l.a.useState(new h.a),[v,S]=l.a.useState(m.all());m.onChange=S;const b=()=>{s||(n(!0),t.getAudienceDashboard().then(e=>{i(e),c(null),n(!1)}).catch(e=>{c(e),n(!1)}))};return l.a.useEffect(()=>{r||b()},[r]),l.a.useEffect(()=>{const e=setInterval(()=>b(),1e4);return()=>clearInterval(e)},[]),r?l.a.createElement(l.a.Fragment,null,o?l.a.createElement(u.a,{error:o}):null,l.a.createElement("section",{className:""},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement(E.a,{contest:e.contest})),l.a.createElement("div",{className:"level-right"},l.a.createElement(p.a,{requesting:s,onClick:b})))),l.a.createElement("section",{className:"is-fullwidth py-5 is-hidden-touch"},l.a.createElement(g.a,{teams:null===(a=null==r?void 0:r.leaderboard)||void 0===a?void 0:a.teams,contest:e.contest,teamPins:v})),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-12"},l.a.createElement("section",{className:"py-5"},l.a.createElement("p",{className:"title"}," Leaderboard "),l.a.createElement(N.a,{leaderboard:null==r?void 0:r.leaderboard,teamPins:v,onPin:m.set}))))):l.a.createElement(l.a.Fragment,null,o?l.a.createElement(u.a,{error:o}):null,l.a.createElement("p",null,"Loading..."))};class S extends l.a.Component{constructor(e){var t,a,s,n,r,i,l,o,c;super(e),this.state={teamName:null!==(a=null===(t=this.props.registrationSession.team)||void 0===t?void 0:t.name)&&void 0!==a?a:"",name:null!==(n=null===(s=this.props.session.contestant)||void 0===s?void 0:s.name)&&void 0!==n?n:"",emailAddress:null!==(l=null===(i=null===(r=this.props.registrationSession.team)||void 0===r?void 0:r.detail)||void 0===i?void 0:i.emailAddress)&&void 0!==l?l:"",isStudent:null!==(c=null===(o=this.props.session.contestant)||void 0===o?void 0:o.isStudent)&&void 0!==c&&c,requesting:!1,requestError:null}}async onSubmit(e){if(e.preventDefault(),!this.state.requesting)try{this.setState({requesting:!0}),this.isEditing()?await this.updateRegistration():this.props.registrationSession.team?await this.joinTeam():await this.createTeam(),this.setState({requestError:null,requesting:!1}),this.props.updateRegistrationSession()}catch(e){this.setState({requestError:e,requesting:!1})}}onChange(e){const t=e.target,a="checkbox"===t.type?t.checked:t.value,s=t.name;this.setState({[s]:a})}createTeam(){return this.props.client.createTeam({teamName:this.state.teamName,emailAddress:this.state.emailAddress,name:this.state.name,isStudent:this.state.isStudent})}joinTeam(){return this.props.client.joinTeam({inviteToken:this.props.inviteToken,teamId:this.props.registrationSession.team.id,name:this.state.name,isStudent:this.state.isStudent})}updateRegistration(){return this.props.client.updateRegistration({teamName:this.state.teamName,emailAddress:this.state.emailAddress,name:this.state.name,isStudent:this.state.isStudent})}isEditing(){return this.props.registrationSession.status==r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.JOINED}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"mt-2"},l.a.createElement("h3",{className:"title is-3"},"注意事項"),l.a.createElement("ul",null,l.a.createElement("li",null,"XSUCON への参加には参加規約への同意が必要です。"),l.a.createElement("li",null,"参加登録が完了すると、他のチームへの参加はできなくなります。"),l.a.createElement("li",null,"1人目 (チーム代表者) の登録後、チームメンバーを招待するための URL を確認することができます。招待 URL を共有し、チームメンバー全員の登録をしてください。"),l.a.createElement("li",null,"チーム名・代表者名に公序良俗に反する名前は使わないでください。"),l.a.createElement("li",null,"チーム名・代表者名に機種依存文字・絵文字・HTMLタグなどが入っていた場合、サイトへの表示時に表現を変えさせていただく場合があります。"))),l.a.createElement("section",{className:"mt-2"},l.a.createElement("h3",{className:"title is-3"},this.isEditing()?"編集":"詳細の入力"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},this.renderTeamFormFields(),this.renderContestantFormFields(),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-primary",disabled:this.state.requesting},this.isEditing()?"保存":"参加規約に同意して登録"))),this.renderError())))}renderTeamFormFields(){var e;if(this.props.registrationSession.team&&this.props.registrationSession.team.leaderId!=(null===(e=this.props.session.contestant)||void 0===e?void 0:e.id)){const e=this.props.registrationSession.team.leader;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldTeamName"},"チーム名"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",disabled:!0,id:"fieldTeamName",value:this.props.registrationSession.team.name||""})),this.isEditing()?l.a.createElement("p",{className:"help"},"代表者 ",e.name," ","のチームへ参加しています。チーム名・代表者メールアドレスは代表者のみが変更可能です。"):l.a.createElement("p",{className:"help"},"招待を利用し、代表者 ",e.name," のチームへ参加します。")))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldTeamName"},"チーム名"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",required:!0,id:"fieldTeamName",name:"teamName",value:this.state.teamName,onChange:this.onChange.bind(this)})),this.isEditing()?l.a.createElement("p",{className:"help"}):l.a.createElement("p",{className:"help"},"現在ログインしている方を代表とするチームを作成します。代表者は変更できません。既存のチームへ参加する場合、代表者もしくはチームメンバーの方より招待 URL を受け取ってください。")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldEmailAddress"},"代表者メールアドレス"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",autoComplete:"email",spellCheck:!1,required:!0,id:"fieldEmailAddress",name:"emailAddress",value:this.state.emailAddress,onChange:this.onChange.bind(this)})),l.a.createElement("p",{className:"help"},"確認メールなどは送信されません。")))}renderContestantFormFields(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldName"},this.props.registrationSession.team?"参加者名":"代表者名"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",required:!0,id:"fieldName",name:"name",value:this.state.name,onChange:this.onChange.bind(this)})),l.a.createElement("p",{className:"help"},"公開されます。本名でなくて構いません (id, HN, その他匿名な記入でも問題ありません)。複数名の名前を記載することはできません (2 人目以降の登録は、登録後確認できる招待URLを利用して、それぞれ個別に登録してください)。")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"学生ですか?"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"checkbox",type:"checkbox",name:"isStudent",checked:this.state.isStudent,onChange:this.onChange.bind(this)}))))}renderError(){return this.state.requestError?l.a.createElement(u.a,{error:this.state.requestError}):null}}class b extends l.a.Component{constructor(e){super(e),this.state={error:null}}onEditButtonClick(e){e.preventDefault(),this.props.enableEdit()}async onWithdrawButtonClick(e){if(e.preventDefault(),confirm("本当にキャンセルしてよろしいですか? この操作は元に戻すことができません。"))try{await this.props.client.deleteRegistration(),alert("参加をキャンセルしました。"),document.location.href="/"}catch(e){this.setState({error:e})}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"mt-2"},l.a.createElement("h3",{className:"title is-3"},"登録完了"),l.a.createElement("ol",null,l.a.createElement("li",null,"必要に応じ、下記より招待 URL をコピー & チームメンバーへ共有し、チームメンバーの参加登録を行ってください (代表者を含め 3 人まで)。"))),l.a.createElement("div",{className:"mt-3"},l.a.createElement("div",{className:"columns"},l.a.createElement("section",{className:"column"},l.a.createElement("h4",{className:"title is-4"},"チーム: ",this.props.registrationSession.team.name),l.a.createElement("p",null,"招待URL:"," ",l.a.createElement("small",null,l.a.createElement("a",{href:this.props.registrationSession.memberInviteUrl},this.props.registrationSession.memberInviteUrl))),l.a.createElement("h5",{className:"title is-5 mt-3"},"メンバーリスト"),this.renderTeamMembers()))),l.a.createElement("section",{className:"mt-3"},l.a.createElement("h4",{className:"title is-4"},"登録内容の編集"),l.a.createElement("p",null,l.a.createElement("button",{className:"button is-info",onClick:this.onEditButtonClick.bind(this)},"編集"),l.a.createElement("br",null),"参加者名・学生申告といった登録内容の修正ができます。チーム名は代表者のみが変更可能です。"),l.a.createElement("p",null,l.a.createElement("button",{className:"button is-danger",onClick:this.onWithdrawButtonClick.bind(this)},"辞退"),l.a.createElement("br",null),"参加をキャンセルします。",this.props.registrationSession.team.leaderId==this.props.session.contestant.id?l.a.createElement("strong",null,"代表者のため、辞退するとチームとして参加辞退となります。"):l.a.createElement("span",null,"チームメンバーであるため、チームから離脱します (他のメンバーには影響しません)。")),this.renderError()))}renderTeamMembers(){return this.props.registrationSession.team.members.map(e=>this.renderTeamMember(e))}renderTeamMember(e){return l.a.createElement("div",{className:"card mt-2",key:e.id.toString()},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("i",{className:"material-icons"},"person")),l.a.createElement("div",{className:"media-content"},l.a.createElement("p",{className:"title is-5"},e.name),l.a.createElement("p",{className:"subtitle is-6"},this.props.registrationSession.team.leaderId==e.id?l.a.createElement("span",{className:"tag is-danger"},"代表者"):null,e.isStudent?l.a.createElement("span",{className:"tag is-info"},"学生"):null)))))}renderError(){return this.state.error?l.a.createElement(u.a,{error:this.state.error}):null}}class f extends l.a.Component{constructor(e){super(e);const t=new URLSearchParams(document.location.search);this.state={session:this.props.session,registrationSession:null,teamId:parseInt(t.get("team_id")||"0",10),inviteToken:t.get("invite_token"),edit:!1,error:null}}componentDidMount(){this.updateRegistrationSession()}async updateRegistrationSession(){try{const e=await this.props.client.getRegistrationSession({teamId:this.state.teamId,inviteToken:this.state.inviteToken});let t=this.state.session;this.state.registrationSession&&(t=await this.props.client.getCurrentSession()),this.setState({session:t,registrationSession:e,edit:!1})}catch(e){this.setState({error:e})}}enableEdit(){this.setState({edit:!0})}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",{className:"title is-1"},"参加登録")),l.a.createElement("main",null,this.renderError(),this.renderPhase()))}renderError(){if(this.state.error)return l.a.createElement(u.a,{error:this.state.error})}renderPhase(){if(!this.state.registrationSession)return l.a.createElement("p",null,"Loading...");{const e=this.renderTeam();switch(this.state.registrationSession.status){case r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.NOT_LOGGED_IN:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message is-danger"},l.a.createElement("div",{className:"message-body"},"参加登録をするにはログインしてください")),e);case r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.CLOSED:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message is-danger"},l.a.createElement("div",{className:"message-body"},"参加登録を現在受け付けていません (定員到達、締切後、もしくは受付開始前)")),e);case r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.NOT_JOINABLE:return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message is-danger"},l.a.createElement("div",{className:"message-body"},"招待元のチームメンバー数が上限に達しているため、この招待を利用して参加登録を進めることはできません。")),e);case r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.CREATABLE:case r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.JOINABLE:return l.a.createElement(l.a.Fragment,null,e,l.a.createElement(S,{client:this.props.client,session:this.state.session,inviteToken:this.state.inviteToken,registrationSession:this.state.registrationSession,updateRegistrationSession:this.updateRegistrationSession.bind(this)}));case r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.JOINED:return this.state.edit?l.a.createElement(S,{client:this.props.client,session:this.state.session,inviteToken:null,registrationSession:this.state.registrationSession,updateRegistrationSession:this.updateRegistrationSession.bind(this)}):l.a.createElement(b,{client:this.props.client,session:this.state.session,registrationSession:this.state.registrationSession,updateRegistrationSession:this.updateRegistrationSession.bind(this),enableEdit:this.enableEdit.bind(this)})}}throw new Error("[BUG] undeterminable state")}renderTeam(){if(!this.state.registrationSession||!this.state.registrationSession.team)return;const e=this.state.registrationSession.team;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"mt-3"},l.a.createElement("h3",{className:"title is-3"},"チームから招待されています"),l.a.createElement("p",null,e.leader.name," のチーム ",e.name," ","からの招待を受諾して参加登録します。")))}}class C extends l.a.Component{constructor(e){super(e),this.state={session:this.props.session,error:null,requesting:!1,logoutSucceeded:!1}}async componentDidMount(){if(!this.state.requesting)try{this.setState({requesting:!0}),await this.logout();const e=await this.props.client.getCurrentSession();this.setState({session:e,error:null,requesting:!1}),location.reload()}catch(e){this.setState({error:e,requesting:!1})}}render(){return this.state.session.contestant?l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",{className:"title is-1"},"ログアウト")),l.a.createElement("main",null,this.renderError())):l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{to:"/"}))}renderError(){if(this.state.error)return l.a.createElement(u.a,{error:this.state.error})}logout(){return this.props.client.logout({})}}class F extends l.a.Component{constructor(e){super(e),this.state={error:null,session:null,contestantId:"",password:"",requesting:!1,registrationSession:null}}async componentDidMount(){this.setState({registrationSession:await this.props.client.getRegistrationSession()})}render(){var e,t;const a=null===(e=this.state.session)||void 0===e?void 0:e.contestant;return a?this.props.redirect?(console.log("redirect: ",this.props.redirect.toString()),l.a.createElement(c.a,{to:this.props.redirect.toString()})):a.isStaff?l.a.createElement(c.a,{to:"/admin"}):(null===(t=this.state.registrationSession)||void 0===t?void 0:t.status)==r.xsuportal.proto.services.registration.GetRegistrationSessionResponse.Status.JOINED?l.a.createElement(c.a,{to:"/contestant"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"message is-success"},l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"参加登録してください")),l.a.createElement("div",{className:"message-body"},l.a.createElement("p",null,"参加登録するには、",l.a.createElement("a",{href:"/registration"},"チームを新しく作成する"),"か、招待URLから既存チームに参加してください。")))):l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",{className:"title is-1"},"ログイン")),l.a.createElement("main",null,this.renderError(),this.renderForm()))}renderError(){if(this.state.error)return l.a.createElement(u.a,{error:this.state.error})}renderForm(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"columns mt-2"},l.a.createElement("form",{className:"column is-half",onSubmit:this.onSubmit.bind(this)},this.renderFormFields())))}renderFormFields(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldContestantId"},"ログインID"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",required:!0,id:"fieldContestantId",name:"contestantId",autoComplete:"username",onChange:this.onChange.bind(this)}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldPassword"},"パスワード"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"password",required:!0,id:"fieldPassword",name:"password",autoComplete:"current-password",onChange:this.onChange.bind(this)}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-primary"},"ログイン"))))}onChange(e){const t=e.target,a=t.value,s=t.name;this.setState({[s]:a})}async onSubmit(e){if(e.preventDefault(),!this.state.requesting)try{this.setState({requesting:!0}),await this.props.client.login({contestantId:this.state.contestantId,password:this.state.password});const e=await this.props.client.getCurrentSession(),t=await this.props.client.getRegistrationSession();this.setState({error:null,requesting:!1,session:e,registrationSession:t}),location.reload()}catch(e){this.setState({error:e,requesting:!1})}}}class y extends l.a.Component{constructor(e){super(e),this.state={error:null,contestantId:"",password:"",requesting:!1,signupSucceeded:!1}}componentDidMount(){}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",{className:"title is-1"},"アカウント作成")),l.a.createElement("main",null,this.renderError(),this.renderForm(),this.renderFinishMessage()))}renderError(){if(this.state.error)return l.a.createElement(u.a,{error:this.state.error})}renderForm(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"columns mt-2",style:{display:this.state.signupSucceeded?"none":""}},l.a.createElement("form",{className:"column is-half",onSubmit:this.onSubmit.bind(this)},this.renderFormFields())))}renderFormFields(){return this.state.signupSucceeded?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"参加登録するには、チームを新しく作成するか、招待URLから既存チームに参加してください。")):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldContestantId"},"ログインID"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",required:!0,id:"fieldContestantId",name:"contestantId",autoComplete:"username",onChange:this.onChange.bind(this)}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"fieldPassword"},"パスワード"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"password",required:!0,id:"fieldPassword",name:"password",autoComplete:"current-password",onChange:this.onChange.bind(this)}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-primary"},"送信"))))}renderFinishMessage(){if(this.state.signupSucceeded)return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"message is-success"},l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"アカウントを作成しました")),l.a.createElement("div",{className:"message-body"},l.a.createElement("p",null,"参加登録するには、",l.a.createElement("a",{href:"/registration"},"チームを新しく作成する"),"か、招待 URL から既存チームに参加してください。"))))}onChange(e){const t=e.target,a=t.value,s=t.name;this.setState({[s]:a})}async onSubmit(e){if(e.preventDefault(),!this.state.requesting)try{await this.signup(),this.setState({requesting:!0}),this.setState({signupSucceeded:!0,error:null,requesting:!1}),location.href="/"}catch(e){this.setState({error:e})}}signup(){return this.props.client.signup({contestantId:this.state.contestantId,password:this.state.password})}}class w extends l.a.Component{constructor(e){super(e),this.state={}}render(){return l.a.createElement(o.a,null,l.a.createElement(m,{session:this.props.session,client:this.props.client}),l.a.createElement("div",{className:"container mt-5"},l.a.createElement(c.d,null,l.a.createElement(c.b,{exact:!0,path:"/",render:({match:e})=>l.a.createElement(l.a.Fragment,null,this.props.session.contest.status==r.xsuportal.proto.resources.Contest.Status.FINISHED||this.props.session.contest.status==r.xsuportal.proto.resources.Contest.Status.STARTED?l.a.createElement(v,{session:this.props.session,client:this.props.client}):l.a.createElement(d,{session:this.props.session,client:this.props.client}))}),l.a.createElement(c.b,{exact:!0,path:"/teams",render:({match:e})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{session:this.props.session,client:this.props.client}))}),l.a.createElement(c.b,{exact:!0,path:"/registration",render:({match:e})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{session:this.props.session,client:this.props.client}))}),l.a.createElement(c.b,{exact:!0,path:"/login",render:({location:e})=>{const t=new URLSearchParams(e.search);return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{client:this.props.client,redirect:t.get("redirect")}))}}),l.a.createElement(c.b,{exact:!0,path:"/logout",render:()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{session:this.props.session,client:this.props.client}))}),l.a.createElement(c.b,{exact:!0,path:"/signup",render:()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{client:this.props.client}))}))))}}var R=a(16),T=a.n(R);!async function(){const e=new s.a,t=await e.getCurrentSession();Object(n.b)(t);const a=document.getElementById("app");T.a.render(l.a.createElement(w,{session:t,client:e}),a)}()}});
//# sourceMappingURL=audience.js.map