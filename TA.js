/**
 * TA - Typing Animation Library
 * Javascript part
 * 
 * @author Vlad Postu
 */


// TA class containing the methods needed for the animation
class TA {
    
    // state containg the animation attributes
    state = {
        htmlEl: '',
        minDelay: 0, 
        maxDelay: 0,
    }

    /**
     * Constructor
     * @param {object} state 
     */
    constructor(state){
        this.state = {
            htmlEl: document.querySelector(state.htmlEl),
            minDelay: state.minDelay,
            maxDelay: state.maxDelay,
        }
    }

    /**
     * typingForward method
     * Based on the base form element in the state the function gradually add letters until it has reached the entered parameter
     * i param must be 0 at the first function call
     * @param {String} finalForm 
     * @param {number} i 
     */
    typingForward(finalForm, i) {
        let duration = this.getRandomNumber(this.state.minDelay, this.state.maxDelay);

        if(this.state.htmlEl.textContent.length < finalForm.length) {
            this.state.htmlEl.textContent += finalForm[i];
            i++; 

            setTimeout(() => this.typingForward(finalForm, i), duration);
        }
    }

    /**
     * typingBackward methdo
     * Based on the base form element in the state the function gradually remove letters until it has reached the entered parameter
     * @param {String} finalForm 
     */
    typingBackward(finalForm) {
        let duration = this.getRandomNumber(this.state.minDelay, this.state.maxDelay);
    
        if (this.state.htmlEl.textContent.length > finalForm.length) {
            this.state.htmlEl.textContent = this.state.htmlEl.textContent.slice(0, (this.state.htmlEl.textContent.length-1));
        }
    
        setTimeout(() => this.typingBackward(finalForm), duration);
    }
    
    /**
     * getRandomNumber method
     * Generate random number using the two parameters as extremes
     * @param {number} min 
     * @param {number} max 
     * @returns random generated number
     */
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    
}



