var response = JSON.parse('{"Message":"Ok","Number":0,"Data":{"CODE":"mqm2","TYPE":0,"ANNOSET":null, "PAGERANGES":"0-9999","EXPIREDATE":"alert(123)","CREATEDBY":"9abc7614-1c87-4969-ba9e-47a94eee44d2","CREATEDBYUSER":"Stefanie Vanbosseghem"}}');
var newCode = new this.CodeViewModel(response.Data);
CodeViewModel.Merge(newCode);
that = this.CurrentProject;

$( 'body' ).bind('keypress', function(e){
   switch (e.keyCode) {


    }
 });
$( 'body' ).bind('keydown', function(e){
        switch (e.keyCode) {

                case 65:
            that.PinnedAnswersMode(((that.PinnedAnswersMode() +1)^2)/3);
                if(that.LastUsedAnswerMode() == 1){
                        answers(that.PinnedAnswersMode());
                        that.DrawHandler.CurrentTool(DrawHandlerViewModel.DrawTool.NoneUntouchable);
                }
            break;
        case 90:
            that.LastUsedAnswerMode(((that.LastUsedAnswerMode() +1)^2)/3);
            break;
        case 233:
            answers();
            break;

                case 39:
                        that.CurrentPageIndex(that.CurrentPageIndex()+1);
                        break;
                case 37:
                        that.CurrentPageIndex(that.CurrentPageIndex()-1);
                        break;
        case 187:
                that.ZoomIn();
                break;
        case 189:
                that.ZoomOut();
                break;
        }
 });


function answers(a)
{
        if (a == 1){
                var clipcss = "rect(0px, 1600px, 1200px, 0px)";
                that.CurrentPage().AnswerClips = [];
                that.CurrentPage().AnswerClips.push(clipcss);
                $('.answerrow').last().css("clip", clipcss);
                that.fixVideo(clipcss);         
                that.CurrentPage().ShowAnswers(true);
        }
        else{
                that.CurrentPage().AnswerClips = [];
                that.CurrentPage().ShowAnswers(false);
                that.ClearAnswers();
        }
}
