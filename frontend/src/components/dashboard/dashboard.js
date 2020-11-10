import React from "react";
import ProfileContainer from "../profile/profile_container";
import Calendar from "./calendar/calendar";

class DashBoard extends React.Component {

  componentWillUnmount() {
    this.props.removeAllUsers();
  }

  render() {
    return (
      <div className="outer-dashboard-container">
        <div className="dashboard-content-container">
          <div className="left-side-dashboard-container">
            <ProfileContainer />
          </div>

          <div className="middle-side-dashboard-container">
              <div className="dash-mid-text">
                <h5 className="dash-mid-title"> Casual Reading of the Day </h5>
                <p>"I think that this should do," said he, glancing into the glass above the fireplace. "I only wish that you could come with me, Watson, but I fear that it won't do. I may be on the trail in this matter, or I may be following a will-o'-the-wisp, but I shall soon know which it is. I hope that I may be back in a few hours." He cut a slice of beef from the joint upon the sideboard, sandwiched it between two rounds of bread, and thrusting this rude meal into his pocket he started off upon his expedition.</p>

                <p>I had just finished my tea when he returned, evidently in excellent spirits, swinging an old elastic-sided boot in his hand. He chucked it down into a corner and helped himself to a cup of tea.</p>

                <p>"I only looked in as I passed," said he. "I am going right on."</p>

                <p>"Where to?"</p>

                <p>"Oh, to the other side of the West End. It may be some time before I get back. Don't wait up for me in case I should be late."</p>

                <p>"How are you getting on?"</p>

                <p>"Oh, so so. Nothing to complain of. I have been out to Streatham since I saw you last, but I did not call at the house. It is a very sweet little problem, and I would not have missed it for a good deal. However, I must not sit gossiping here, but must get these disreputable clothes off and return to my highly respectable self."</p>

                <p>I could see by his manner that he had stronger reasons for satisfaction than his words alone would imply. His eyes twinkled, and there was even a touch of colour upon his sallow cheeks. He hastened upstairs, and a few minutes later I heard the slam of the hall door, which told me that he was off once more upon his congenial hunt.</p>

                <p>I waited until midnight, but there was no sign of his return, so I retired to my room. It was no uncommon thing for him to be away for days and nights on end when he was hot upon a scent, so that his lateness caused me no surprise. I do not know at what hour he came in, but when I came down to breakfast in the morning there he was with a cup of coffee in one hand and the paper in the other, as fresh and trim as possible.</p>

                <p>"You will excuse my beginning without you, Watson," said he, "but you remember that our client has rather an early appointment this morning."</p>

                <p>"Why, it is after nine now," I answered. "I should not be surprised if that were he. I thought I heard a ring."</p>

                <p>It was, indeed, our friend the financier. I was shocked by the change which had come over him, for his face which was naturally of a broad and massive mould, was now pinched and fallen in, while his hair seemed to me at least a shade whiter. He entered with a weariness and lethargy which was even more painful than his violence of the morning before, and he dropped heavily into the armchair which I pushed forward for him.</p>

                <p>"I do not know what I have done to be so severely tried," said he. "Only two days ago I was a happy and prosperous man, without a care in the world. Now I am left to a lonely and dishonoured age. One sorrow comes close upon the heels of another. My niece, Mary, has deserted me."</p>

                <p>"Deserted you?"</p>

                <p>"Yes. Her bed this morning had not been slept in, her room was empty, and a note for me lay upon the hall table. I had said to her last night, in sorrow and not in anger, that if she had married my boy all might have been well with him. Perhaps it was thoughtless of me to say so. It is to that remark that she refers in this note:</p>

                <p>"'MY DEAREST UNCLE:--I feel that I have brought trouble upon you, and that if I had acted differently this terrible misfortune might never have occurred. I cannot, with this thought in my mind, ever again be happy under your roof, and I feel that I must leave you forever. Do not worry about my future, for that is provided for; and, above all, do not search for me, for it will be fruitless labour and an ill-service to me. In life or in death, I am ever your loving,--MARY.'</p>

                <p>"What could she mean by that note, Mr. Holmes? Do you think it points to suicide?"</p>

                <p>"No, no, nothing of the kind. It is perhaps the best possible solution. I trust, Mr. Holder, that you are nearing the end of your troubles."</p>

              </div>
          </div>

                    <div className="right-side-dashboard-container">
                        <Calendar />
                    </div>
          
                </div>
            </div>
        );
    }
}

export default DashBoard;
