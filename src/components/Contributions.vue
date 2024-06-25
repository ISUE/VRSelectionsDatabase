<template>
  <v-container>
    <v-row align="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-row align="center" no-gutters>
            <v-col cols="auto">
              <v-img width="50px" src="@/assets/vrfox.png" />
            </v-col>
            <v-col>
              <v-card-title class="large-text">Home</v-card-title>
            </v-col>
          </v-row>
        </router-link>
      </v-col>
      <v-col>
        <h1>
          Interactive Visualizer for Object Selection Techniques in Consumer VR
          Applications
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mt-2">
          <v-card-title>Contributions</v-card-title>
          <v-card-text>
            <p>
              This interactive database aims to capture a snapshot of selection
              techniques in consumer VR applications.
              <br />
              It is open to community contributions and will be updated with
              selection entries from new and popular VR applications.
            </p>
          </v-card-text>
        </v-card>
        <v-card class="mt-2">
          <v-card-title>Contribution Guidelines</v-card-title>
          <v-card-text>
            <ul class="ml-12">
              <li>
                <strong>Identify a New Scenario:</strong> For each new VR
                selection scenario, locate a relevant YouTube video and note the
                timestamp that best represents the scenario. Use the coding
                manual below to categorize each variable according to the
                provided taxonomy.
              </li>
              <li>
                <strong>Submit a Pull Request:</strong> Fork the
                <a :href="sourceCodeLink" target="_blank">ISUE/vr_selections</a>
                repository and edit the
                <span
                  style="
                    font-family: monospace;
                    background-color: #edeff1;
                    color: #dc2f40;
                  "
                  >data_website.csv</span
                >
                file to include your new scenario(s). Create a pull request to
                submit your changes.
              </li>
              <li>
                <strong>Review and Approval:</strong> Our team will review your
                submission, and once approved, it will be merged. The new
                database entries will then be reflected on the website. If
                accounting for new scenarios requires updating the taxonomy,
                please open a discussion on
                <a :href="sourceCodeLink" target="_blank">ISUE/vr_selections</a>
                and we will review it.
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mt-2">
          <v-card-title>Citing</v-card-title>
          <v-card-text>
            <p>
              If you find this database and taxonomy useful in your work, please
              consider citing the publication that this work is a part of:
            </p>
            <highlightjs language="bibtex" :code="citationText" />
          </v-card-text>
          <div>
            <LinksSection
              :pdfLink="pdfLink"
              :sourceCodeLink="sourceCodeLink"
              :labPageLink="labPageLink"
              :doiLink="doiLink"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mt-2">
          <v-card-title>Coding Manual and the Taxonomy</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card class="mt-2">
                  <v-card-title>Where taxonomy</v-card-title>
                  <v-card-text>
                    <b>Reference Frame</b>
                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Body-referenced</v-expansion-panel-title
                        >
                        <v-expansion-panel-text>
                          Body-referenced objects follow the movement of a
                          user's body part.
                          <v-expansion-panels>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Hand-referenced</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Hand-referenced objects are attached to one or
                                both hands of the user. An example of this are
                                2D UI elements on a menu that follows the user's
                                non-dominant hand, selectable with a ray
                                controlled by the user's dominant hand.
                                <br />Example:
                                <a
                                  href="https://youtu.be/FVz7TfYXcWA?si=rREG8QJZjCHJ9U1W&t=150"
                                  target="_blank"
                                  >Selection from hand-referenced UI</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Head-referenced</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Head-referenced objects follow the position and
                                orientation of the user's head. A menu UI that
                                always follows the center of the user's view is
                                an example of head-referenced 2D UI.
                                <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=F2iriqT40eg&t=32s"
                                  target="_blank"
                                  >Selection from head-referenced UI</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Torso-referenced</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Torso-referenced objects follow the estimated
                                position of the users body. In many
                                applications, a user can look down to see a
                                utility belt with selectable items in an
                                inventory system, attached to the users torso.
                                <br />Example:
                                <a
                                  href="https://youtu.be/ltQTSGvrRxU?t=609"
                                  target="_blank"
                                  >Selection of on-torso objects</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>

                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title>
                          Environment-referenced
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                          Environment-referenced objects are situated in the
                          virtual world's coordinate system.
                          <v-expansion-panels>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Peripersonal
                              </v-expansion-panel-title>
                              <v-expansion-panel-text>
                                Peripersonal objects are within a user's arm
                                reach.
                                <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=KA3J3N9eOlA&t=239s"
                                  target="_blank"
                                  >Selection of environment-referenced object at
                                  peripersonal distance</a
                                >.
                              </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Extrapersonal
                              </v-expansion-panel-title>
                              <v-expansion-panel-text>
                                Extrapersonal objects are beyond a user's arm
                                reach, requiring selection techniques designed
                                for interacting with distant targets.
                                <br />Example:
                                <a
                                  href="https://youtu.be/1m7SbxNkHj0?si=PqQ-0tw3RNl-U4a5&t=1063"
                                  target="_blank"
                                  >Selection of environment-referenced object at
                                  extrapersonal distance</a
                                >.
                              </v-expansion-panel-text>
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                    </v-expansion-panels>

                    <br />
                    <b>Target Type</b>

                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >3D Object</v-expansion-panel-title
                        >
                        <v-expansion-panel-text>
                          3D Objects represent three-dimensional virtual
                          entities with width, depth, and height. Many of them
                          mimic objects in the physical world, like bottles,
                          fruit, and furniture.
                          <br />Example:
                          <a
                            href="https://youtu.be/QHsSn8qo9Uk?si=6DIPGa6w9iWE65vV&t=1512"
                            target="_blank"
                            >Selection of a 3D object</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >UI element</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >UI element is an interactive component that is
                          typically used for system control. Common ones include
                          buttons, menus, and 2D virtual keyboards. These
                          elements can be observed in traditional 2D window
                          layouts inside VR. <br />Example:
                          <a
                            href="https://youtu.be/8-fkP8dLOqE?si=BqmNKeRsoOfZAMRw&t=87"
                            target="_blank"
                            >Selection of an UI element</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Avatar</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Avatar refers to the digital representation of living
                          beings in virtual environments. Avatars can be in the
                          form of foes, wildlife, humanoids, or other users in a
                          multi-user application. These type of targets are
                          normally moving in the virtual space. <br />Example:
                          <a
                            href="https://youtu.be/1_uI1czldbc?t=1121"
                            target="_blank"
                            >Selection of an avatar</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Storage Unit</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Storage Unit is an empty unit space that is most
                          frequently observed in inventory systems. They can be
                          2D and 3D. Users can select a storage unit to store or
                          retrieve items like 3D objects. <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=Ea8MLhFnDWw&t=112s"
                            target="_blank"
                            >Selection of a storage unit</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Discrete Configuration</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Discrete configuration is position and orientation of
                          a proxy object (e.g., slider, lever or knob) that
                          corresponds to a single state from a set of states.
                          The proxy object is limited in degrees of freedom and
                          is always set to one of the discrete positions. The
                          user manipulates a proxy object and sets it to a
                          discrete position to control the system.
                          <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=1KsLr6pQzdo&t=6099s"
                            target="_blank"
                            >Selection of a discrete configuration</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card-text>
                </v-card>
                <v-card class="mt-2">
                  <v-card-title>How taxonomy</v-card-title>
                  <v-card-text>
                    <b>Indication</b>

                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Pointing</v-expansion-panel-title
                        >
                        <v-expansion-panel-text>
                          Pointing requires the user to control a virtual ray or
                          an extended volume, such as in the shape of a cone,
                          emanating from the input device and following the
                          device's orientation. The virtual ray could also be
                          curved (e.g., parabolic shape).
                          <v-expansion-panels>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Hand ray</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Hand ray pointing originates at the position of
                                a hand or handheld controller. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=2k0rj-o_9b4&t=13s"
                                  target="_blank"
                                  >Pointing with a hand ray</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Head gaze</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Head gaze pointing emanates from the headset
                                position. <br />Example:
                                <a
                                  href="https://youtu.be/Lck4WT3HI_c?si=E7L0OjrPdzkBgT-9&t=239"
                                  target="_blank"
                                  >Pointing with head gaze</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Intersecting</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Intersecting represents colliding (e.g., "touching")
                          the user's hand or a handheld object with the target.
                          <br />Example:
                          <a
                            href="https://youtu.be/GllGAzFeXxc?si=wXxF4P7KxsTibO4x&t=9"
                            target="_blank"
                            >Selecting a 3D object through direct
                            intersection</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Aiming</v-expansion-panel-title
                        >
                        <v-expansion-panel-text>
                          Aiming includes gamified and physics-based indication
                          methods mostly used for in-game weapons.
                          <v-expansion-panels>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Shooting</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Shooting requires aiming an invisible ray while
                                holding an in-game weapon at eye level,
                                partially occluding the target in the process.
                                <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=A4eLTs4ZHYE&t=405s"
                                  target="_blank"
                                  >Aiming and shooting at a target with a
                                  virtual gun</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Throwing</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Throwing requires aiming at a target and
                                performing a throwing motion with the intention
                                of releasing a handheld object in that direction
                                with speed. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=ZUt-p0Lw6C0&t=1099s"
                                  target="_blank"
                                  >Throwing a virtual object</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Discrete manipulation</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Discrete manipulation requires physical manipulation
                          of an acquired proxy object (e.g., slider, lever or
                          knob), setting it to one of the available selectable
                          options. <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=tVLHHibf5M0&t=17s"
                            target="_blank"
                            >Selection through discrete manipulation of a proxy
                            object</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Enclosing</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Enclosing requires the user to specify a volume
                          (e.g., a bounding box) that likely includes more than
                          one selectable object. <br />Example:
                          <a
                            href="https://youtu.be/hR0IYRPna3o?si=1ei-erUYXuKni_XU&t=112"
                            target="_blank"
                            >Selection through enclosing with a volume</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                    </v-expansion-panels>

                    <br />
                    <b>Interactor</b>

                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title>Ray</v-expansion-panel-title>
                        <v-expansion-panel-text>
                          Ray (or an extended volume) can serve for target
                          selection, usually involving pointing or aiming at
                          objects.
                          <v-expansion-panels>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Visible Ray</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Visible ray extends from its origin point
                                following a user-input direction. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=FVz7TfYXcWA&t=150s"
                                  target="_blank"
                                  >Selection with a visible ray</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Invisible Ray</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Invisible ray acts similar to a visible ray,
                                except the user can not see its rendered
                                representation. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=A4eLTs4ZHYE&t=405s"
                                  target="_blank"
                                  >Selection with an invisible ray</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >2D Cursor</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >2D Cursor leverages an invisible ray but
                                provides feedback by rendering the point of
                                intersection between the ray and the
                                environment. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=M-z4KwnQdL8&t=273s"
                                  target="_blank"
                                  >Selection with a 2D cursor</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Virtual Hand</v-expansion-panel-title
                        >
                        <v-expansion-panel-text>
                          Virtual hand is a virtual representation of a user's
                          hand in VR. The representation is created through
                          handheld controllers or other hand tracking devices.
                          <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=ltQTSGvrRxU&t=749s"
                            target="_blank"
                            >Selection with a virtual hand</a
                          >.
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Handheld Object</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Handheld object refers to a virtual item obtained for
                          selection purposes, like a pen for color dipping or a
                          knob for state selection. In these scenarios, the
                          selection process is dependent on the presence and use
                          of these handheld objects; without them, the selection
                          cannot be completed. <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=QBATIOIWIQg&t=4434s"
                            target="_blank"
                            >Selection with a handheld object</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                    </v-expansion-panels>

                    <br />
                    <b>Confirmation</b>

                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Analog</v-expansion-panel-title
                        >
                        <v-expansion-panel-text>
                          Analog confirmation demands a controller with physical
                          switch (e.g., button, trigger). The switch can be
                          operated in three different forms to confirm the
                          selection.
                          <v-expansion-panels>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Click</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Click refers to pressing and instantly
                                releasing a physical switch. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=A4eLTs4ZHYE&t=405s"
                                  target="_blank"
                                  >Selection with a click</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Continued press</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Continued press refers to pressing and holding
                                a physical switch for acquisition or a specific
                                time period. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=KA3J3N9eOlA&t=239s"
                                  target="_blank"
                                  >Selection with a hold</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Release</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Release refers to un-pressing a pressed
                                physical button. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=jmkewyqP6Vw&t=1666s"
                                  target="_blank"
                                  >Selection with a release</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Tracked hand</v-expansion-panel-title
                        >
                        <v-expansion-panel-text>
                          Tracked hand confirmation requires input devices that
                          track the user's hand gestures in the physical
                          environment. Similar to an analog input, there are
                          three different confirmation methods.
                          <v-expansion-panels>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Click gesture</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Click gesture refers to performing a gesture
                                momentarily (e.g., pinch, grip) and returning
                                the hand to a non-gesture pose. <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=qFNVe4F7WAA&t=45s"
                                  target="_blank"
                                  >Selection with a click gesture</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Hold gesture</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Hold gesture refers to holding a gesture for
                                acquisition or a specific time period.
                                <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=G_HKJ1qxOwI&t=74s"
                                  target="_blank"
                                  >Selection with a hold gesture</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title
                                >Release gesture</v-expansion-panel-title
                              >
                              <v-expansion-panel-text
                                >Release gesture refers to returning the hand to
                                a non-gesture pose from a predefined gesture
                                (e.g., releasing a pinch to drop an object into
                                a storage unit). <br />Example:
                                <a
                                  href="https://www.youtube.com/watch?v=3QvRJi8cNtk&t=553s"
                                  target="_blank"
                                  >Selection with a release gesture</a
                                >.</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-expansion-panel-text>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Press-in motion</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Press-in motion necessitates a physics-based
                          interaction that involves the user's hand trajectory.
                          It refers to the user moving their hand forward while
                          pushing a virtual 3D button until its actuation point,
                          mimicking a real-world button press. In contrast to
                          tracked hand confirmation, specific hand gestures are
                          not necessary; instead, the emphasis lies on the
                          motion itself. <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=M-z4KwnQdL8&t=110s"
                            target="_blank"
                            >Selection with a press-in motion</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title>Dwell</v-expansion-panel-title>
                        <v-expansion-panel-text
                          >Dwell mandates the user to maintain a ray (or an
                          extended volume) or virtual hand intersected with a
                          target for a predetermined duration. No specific hand
                          gesture is necessary; the emphasis lies in maintaining
                          the intersection. <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=ctn_pWBqHFc&t=222s"
                            target="_blank"
                            >Selection with a dwell</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Automatic</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Automatic confirmation needs no explicit command from
                          the user following the indication; the selection is
                          triggered automatically. <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=2k0rj-o_9b4&t=106s"
                            target="_blank"
                            >Selection with automatic confirmation</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                    </v-expansion-panels>

                    <br />
                    <b>Outcome</b>

                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >Acquisition</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >Acquisition is a selection type that results in the
                          target being possessed by the user, usually following
                          the user's hand. <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=-Fw4dPwZu9g&t=55s"
                            target="_blank"
                            >Acquisition of an object</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-title
                          >System Control</v-expansion-panel-title
                        >
                        <v-expansion-panel-text
                          >System control refers to selection that results in
                          changes in the underlying system, different from
                          acquisition (e.g., UI interactions, dealing damage to
                          enemy avatars). <br />Example:
                          <a
                            href="https://www.youtube.com/watch?v=KQJzGzuMNOM&t=247s"
                            target="_blank"
                            >System control through selection</a
                          >.</v-expansion-panel-text
                        >
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card class="mt-2">
                  <v-card-text>
                    <template v-slot:default>
                      <v-img src="@/assets/webscreen.png" />
                    </template>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
const citationText = ref<string>(
  `@inproceedings{anon2024selections,
    title={From Research to Practice: Survey and Taxonomy of Object Selection in Consumer VR Applications},
    author={Anonymous, Fox and Anonymous, Mouse and Anonymous, Llama and Anonymous, Bear},
    booktitle={Some Cool 2024 VR Interactions Conference},
    pages={1-11},
    year={2024}
}`,
);
const pdfLink = "path/to/pdf";
const sourceCodeLink = "https://github.com/ISUE/vr_selections";
const labPageLink = "https://www.eecs.ucf.edu/isuelab/";
const doiLink = "path/to/doi";
</script>

<style scoped>
.large-text {
  font-size: 36px;
  letter-spacing: normal;
}
</style>
