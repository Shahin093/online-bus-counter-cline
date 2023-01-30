import React from 'react';
import './ReviewPage.css';
const ReviewPage = () => {
    return (
        <div>
            <script src="https://use.fontawesome.com/a6f0361695.js"></script>
            <form id="feedback" action="">
                <div class="pinfo">Your personal info</div>

                <div class="form-group">
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <input name="name" placeholder="John Doe" class="form-control" type="text" />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input name="email" type="email" class="form-control" placeholder="john.doe@yahoo.com" />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-globe"></i></span>
                            <input name="URL" placeholder="https://google.com" class="form-control" type="url" />
                        </div>
                    </div>
                </div>

                <div class="pinfo">Rate our overall services.</div>


                <div class="form-group">
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-heart"></i></span>
                            <select class="form-control" id="rate">
                                <option value="1star">1</option>
                                <option value="2stars">2</option>
                                <option value="3stars">3</option>
                                <option value="4stars">4</option>
                                <option value="5stars">5</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="pinfo">Write your feedback.</div>


                <div class="form-group">
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-pencil"></i></span>
                            <textarea class="form-control" id="review" rows="3"></textarea>

                        </div>
                    </div>
                </div>

                <button type="submit" class="btnn btnn-primary">Submit</button>


            </form>
        </div>
    );
};

export default ReviewPage;