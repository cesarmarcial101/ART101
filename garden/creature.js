 $("#crAdd").click(function () {

let crName = $("#crName").val();
let crColor = $("#crColor").val();
let crEyesNum = $("#crEyesNum").val();

$("#creature-list").append(`
<div class="creature">
   <div class="creature-body"></div>
   <div class="creature-info">${crName}</div>
</div>
`);

// lets create the eyes using html
let crEyesHtml="";
for (let i = 0; i < crEyesNum; i++) {
crEyesHtml=crEyesHtml+ "<div class='eye'>.</div>"
};
$("#crName").val("");
});
