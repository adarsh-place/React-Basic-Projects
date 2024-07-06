export default function InputDiv({onChange,userInput}){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" required onChange={(event) => onChange('initialInvestment',event.target.value)} value={userInput.initialInvestment}/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" required onChange={(event) => onChange('annualInvestment',event.target.value)} value={userInput.annualInvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" required onChange={(event) => onChange('expectedReturn',event.target.value)} value={userInput.expectedReturn}/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" required onChange={(event) => onChange('duration',event.target.value)} value={userInput.duration}/>
                </p>
            </div>
        </section>
    )
}