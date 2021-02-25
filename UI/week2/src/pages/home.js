import React from "react";

class Home extends React.Component{
    render()
    {
        return(
        <div>
            <header>
                <h1 class="title">Expense Tracker App</h1>
            </header>

            <section class="content">
                <h3 class="secondTitle">Add a new item: </h3>
                <div class="form">
                    <form id="expForm">
                        <div class="formLine left">
                            <span for="type">Type:</span>
                            <select id="type">
                                <option value="chooseOne">Choose one...</option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                                {/* <!--<option value="Cryptocoin">Cryptocoin</option>
                                <option value="Other">Other</option>--> */}
                            </select>
                        </div>
                        <div class="formLine right">
                            <span for="name">Name:</span>
                            <input type="text" id="name"/>
                        </div>

                        <div class="formLine left">
                            <span for="date">Date:</span>
                            <input type="date" id="date"/>
                        </div>
                        <div class="formLine right">
                            <span for="amount">Amount:</span>
                            <input type="text" id="amount"/>
                        </div>
                        <button type="submit" class="buttonSave">Add a new expense</button>
                    </form>
                </div>
            </section>
            <section class="content">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody id="expenseTable">

                    </tbody>
                </table>
            </section>
            <script src="app.js"></script>

        </div>
        );
    }
    
}



export default Home;