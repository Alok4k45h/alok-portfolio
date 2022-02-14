import React from "react";
import WritingData from "./WritingData";
import "./WritingSection.css";

function WritingSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="heading">My Diary 📖</h1>
            <p className="writing-section-description">
              Having a conversation with my true friend, my Diary, who has never
              judged me, always helps me and makes me calm and happy...
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="writing-section pt-5 pb-5" id="writingSection">
        <div className="container">
          <div className="row flex-with-center">
            {WritingData.map((writing) => {
              return (
                <div className="col-12 col-md-4">
                  <div className="writing-card p-3 mb-3">
                    <img src="./diarypage.png" className="writing-card-image" />
                    <h1 className="writing-card-title mt-3">
                      {writing.heading}
                    </h1>
                    <p className="writing-card-description">
                      {writing.description}
                    </p>
                    <div>
                      <button
                        type="button"
                        className="custom-button"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Read
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog mt-5">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title thanking-customers-section-modal-title"
                                id="exampleModalLabel"
                              >
                                {writing.modalHeading}
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                {writing.explanation} <hr />
                                💖💕.....me@alokkr.o7
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritingSection;
