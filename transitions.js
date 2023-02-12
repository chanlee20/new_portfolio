import Highway from "@dogstudio/highway";
import gsap from "gsap";
class Fade extends Highway.Transition{
    in({from,to,done}){
        gsap.timeline().fromTo(to, {left: '-100%', top: '50%'}, {duration: 0.5, left: '0%'})
        .fromTo(to, {heigt:0}, {duration:0.5, heigt:0, top:'10%', onComplete: function(){
            from.remove()
            done()
        }})
        // .fromTo(to.children[0], {opacity: 0}, {duration: 0.5, opacity: 1})
    }
    out({from,done}){
        done();
    }
}

export default Fade