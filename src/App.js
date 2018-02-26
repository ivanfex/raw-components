import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form>
            <p>Please fill out as much information as you can.</p>
            <FormGroup>
                <Label>Name</Label>
                <Input placeholder="Full name" />
            </FormGroup>
            <FormGroup>
                <Label>What do you prefer to be called?</Label>
                <Input placeholder="How should we call you?" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Date of Birth</Label>
                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
            </FormGroup>
            <FormGroup>
                <Label>Current Street Address</Label>
                <Input placeholder="22 Orange Street" />
            </FormGroup>
            <FormGroup>
                <Label>Apartment Number</Label>
                <Input/>
            </FormGroup>
            <FormGroup>
                <Label>Zip Code</Label>
                <Input/>
            </FormGroup>
            <p>-------------------------------------------------------</p>
            <p>Please provide your contact information, and let us know the the most convenient way to reach you.</p>
            <FormGroup tag="fieldset">
              <Label>What is the best way to reach you?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Phone
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Email
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Social Media
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
                <Label>Phone Number</Label>
                <Input/>
            </FormGroup>

            <FormGroup tag="fieldset">
              <Label>Do you prefer a call or text?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Call
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Text
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
                <Label>Email Address</Label>
                <Input/>
            </FormGroup>

            <Label>Please let us know what social media apps you use the most. (Select all that apply.)</Label>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Facebook
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Twitter
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Instagram
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Other:
                 <Input  inline/>
              </Label>
            </FormGroup>

            <FormGroup>
                <Label>What are your social media handles? (for example "Instagram is @name")</Label>
                <Input/>
            </FormGroup>
            <p>This is just to contact you if needed. WE WILL NOT FOLLOW YOU!</p>

            <p>-------------------------------------------------------</p>

            <p>Please provide the following information so we can understand where you are on your education & employment pathway.</p>

            <FormGroup tag="fieldset">
              <Label>Do you have a High School Diploma?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  No
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup tag="fieldset">
              <Label>Do you have a GED, TASC, or other high school diploma equivalent?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  No
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup tag="fieldset">
              <Label>Are you in school or a training program now?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  No
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
                <Label>If so, what school or training program?</Label>
                <Input/>
            </FormGroup>

            <Label>What kinds of schools or training programs have you attended? (select all that apply)</Label>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> High school
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> GED program
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Other kind of alternative high school program (transfer school, YABC program, Learning to Work program)
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> College
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Trade school and/or vocational college
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Apprentice program
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Workforce development program
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Other:
                 <Input  inline/>
              </Label>
            </FormGroup>

            <FormGroup>
                <Label>Have you ever been an intern or a volunteer? If so, please describe.</Label>
                <Input/>
            </FormGroup>
            <FormGroup>
                <Label>Have you ever started up or run your own business? If so, please describe.</Label>
                <Input/>
            </FormGroup>

            <FormGroup tag="fieldset">
              <Label>Are you employed right now?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Yes, full-time
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Yes, part-time
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                    Other situation (we can discuss this with you when we meet)
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Other
                  <Input/>
                </Label>
              </FormGroup>
            </FormGroup>

            <p>-------------------------------------------------------</p>
            <p>We want to help you prepare for a job and a career pathway that interests you. </p>

            <Label>What professions are you interested in learning more about? (Select as many as apply)</Label>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Healthcare
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Technology
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Industrial/Manufacturing
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Food Service/Culinary
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Retail
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="checkbox" /> Other:
                 <Input  inline/>
              </Label>
            </FormGroup>

            <p>-------------------------------------------------------</p>

            <p>We can help you to address your challenges so you can reach your education and employment goals. Please identify the support services that you would like to be connected to.</p>

                <Label>Which of the following support services could be helpful for you?</Label>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" /> Accessing healthcare services
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Childcare
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Caring for other family members
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Citizenship & immigration services
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" /> College and financial aid application assistance
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Criminal record report issues (obtaining report, fixing errors, sealing records, etc.)
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Disability support services
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> English language & literacy skills
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" /> Financial counseling
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Health insurance navigation
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Housing and/or shelter
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Legal services & advocacy
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Housing and/or shelter
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Legal services & advocacy
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> LGBTQ support services
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Mental health support services
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Public benefits and income support (SNAP, TANF, SSI, etc)
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Substance use support services
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Transportation
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Survivor assistance (domestic violence, assault, human trafficking, crime, etc.)
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Violence prevention and/or mediation
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                     <Input type="checkbox" /> Other:
                     <Input  inline/>
                  </Label>
                </FormGroup>

                <p>-------------------------------------------------------</p>

                <p>Responses to the following questions will only be used to connect you with services and resources you may be eligible for, and will not be shared with anyone else. Some services and resources are specially designed for, or give priority to, people who have had certain life experiences.</p>

                    <Label>Would you describe yourself as having any of the following life experiences:</Label>

                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Foster care
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" /> Homeless/Runaway
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> DACA (Deferred Action for Childhood Arrivals)
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Undocumented immigrant
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> LGBTQ identity
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Justice-involved or court-involved
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Special needs and/or disability
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Individual Education Plan (IEP) while in school
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Mental health challenges
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Substance use or addiction
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                         <Input type="checkbox" /> Other:
                         <Input  inline/>
                      </Label>
                  </FormGroup>
        </Form>
      </div>
    );
  }
}

export default App;
