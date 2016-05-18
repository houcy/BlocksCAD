/*
    Copyright (C) 2014-2015  H3XL, Inc

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// This file holds the html for the main page
var blockscadpage = {};
blockscadpage.start = function() {
  var output = "";


output += '  <div id="main">\n';
output += '    <nav class="navbar navbar-default" id="top-navigation-bar">\n';
output += '      <div class="container-fluid">\n';
output += '        <a href="#" class="pull-left"><img src="imgs/bslogo.png" style="max-height:50px"></a>\n';
output += '        <ul class="nav navbar-nav">\n';
// output += '          <li class="dropdown vc">\n';
// output += '          <select id="languageMenu"></select>\n';
// output += '          </li>\n';
output += '          <li class="dropdown">\n';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><img src="imgs/globe.png" style="width:20px"><span class="caret"></span></a>\n';
output += '            <ul id="languageMenu" class="dropdown-menu" role="menu">\n';
output += '            </ul>\n';
output += '          </li>\n';


output += '          <li class="dropdown"> \n';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">'+Blockscad.Msg.PROJECT_MENU+'<span class="caret"></span></a>\n';
output += '            <ul id="file-menu" class="dropdown-menu" role="menu">\n';
output += '              <li><a href="#" class="new-project">'+Blockscad.Msg.NEW+'</a></li>\n';
output += '              <li class="divider"></li>\n';
output += '              <li><a href="#" id="saveLocal">'+Blockscad.Msg.SAVE_BLOCKS_LOCAL+'</a></li>\n';
output += '              <li>\n';
output += '                <input type="file" accept=".xml" id="loadLocal" style="visibility: hidden; width: 1px; height: 1px" />\n';
output += '                <a href="#" onclick="document.getElementById(\'loadLocal\').click(); return false">'+Blockscad.Msg.LOAD_BLOCKS_LOCAL+'</a>\n';
output += '              </li>\n';
output += '              <li class="divider"></li>\n';
output += '              <li>\n';
output += '                <input type="file" accept=".xml" id="importLocal" style="visibility: hidden; width: 1px; height: 1px" />\n';
output += '                <a href="#" onclick="document.getElementById(\'importLocal\').click(); return false">'+Blockscad.Msg.IMPORT_BLOCKS_LOCAL+'</a>\n';
output += '              </li>\n';
output += '              <li>\n';
output += '                <input type="file" accept=".stl" id="importStl" style="visibility: hidden; width: 1px; height: 1px" />\n';
output += '                <a href="#" onclick="document.getElementById(\'importStl\').click(); return false">'+Blockscad.Msg.IMPORT_STL_MENU +'</a>\n';
output += '              </li>\n';
output += '              <li class="divider"></li>\n';
output += '              <li><a href="#" id="saveOpenscad">' + Blockscad.Msg.SAVE_SCAD_LOCAL + '</a></li>\n';
output += '            </ul>\n';
output += '          </li>\n';
output += '          <li class="dropdown">\n';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + Blockscad.Msg.OPTIONS_MENU + '<span class="caret"></span></a>\n';
output += '            <ul id="options-menu" class="dropdown-menu" role="menu">\n';
output += '              <li><a href="#" id="simpleToolbox">' + Blockscad.Msg.SIMPLE_TOOLBOX + '</a></li>\n';
output += '              <li><a href="#" id="advancedToolbox">' + Blockscad.Msg.ADVANCED_TOOLBOX + '</a></li>\n';
output += '              <li>\n';
output += '                <a class="trigger right-caret">' + Blockscad.Msg.BLOCK_COLORS + '</a>\n';
output += '                <ul class="dropdown-menu sub-menu">\n';
output += '                  <li><a href="#" id="colors_one">' + Blockscad.Msg.CLASSIC_COLORS + '</a></li>\n';
output += '                  <li><a href="#" id="colors_two">' + Blockscad.Msg.PALE_COLORS + '</a></li>\n';
output += '                </ul>\n';
output += '              </li>\n';
output += '            </ul>\n';
output += '          </li>\n';
output += '          <li class="dropdown">\n';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + Blockscad.Msg.HELP_MENU + '<span class="caret"></span></a>\n';
output += '            <ul id="help-menu" class="dropdown-menu" role="menu">\n';
output += '              <li><a href="/docs/" target="_blank">' + Blockscad.Msg.DOCUMENTATION_LINK + '</a></li>\n';
// output += '<!--               <li class="divider"></li>\n';
// output += '              <li><a href="#" id="colorPicker">Color Picker</a></li> -->\n';
output += '              <li class="divider"></li>\n';
output += '              <li><a href="#" data-toggle="modal" data-target="#about-modal">' + Blockscad.Msg.ABOUT_LINK + '</a></li>\n';
output += '            </ul>\n';
output += '          </li>\n';
output += '          <li class="dropdown">\n';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + Blockscad.Msg.EXAMPLES_MENU + '<span class="caret"></span></a>\n';
output += '            <ul id="examples-menu" class="dropdown-menu" role="menu">\n';
output += '              <li><a href="#" id="examples_cube_with_cutouts">' + Blockscad.Msg.EXAMPLE_CUBE_WITH_CUTOUTS + '</a></li>\n';
output += '              <li><a href="#" id="examples_anthias_fish">' + Blockscad.Msg.EXAMPLE_ANTHIAS_FISH +'</a></li>\n';
output += '              <li><a href="#" id="examples_torus">' + Blockscad.Msg.TORUS + '</a></li>\n';
output += '              <li><a href="#" id="examples_box">' + Blockscad.Msg.EXAMPLE_PARAMETRIC_BOX + '</a></li>\n';
output += '              <li><a href="#" id="examples_linear_extrude">' + Blockscad.Msg.LINEAR_EXTRUDE + '</a></li>\n';
output += '              <li><a href="#" id="examples_rotate_extrude">' + Blockscad.Msg.ROTATE_EXTRUDE + '</a></li>\n';
output += '              <li><a href="#" id="examples_hulled_loop_sun">' + Blockscad.Msg.EXAMPLE_LOOP_SUN + '</a></li>\n';
output += '              <li><a href="#" id="examples_sine_function_with_loop">' + Blockscad.Msg.EXAMPLE_LOOP_SINE + '</a></li>\n';
output += '              <li><a href="#" id="examples_trefoil_knot_param_eq">' + Blockscad.Msg.EXAMPLE_PARAMETRIC_EQ_KNOT + '</a></li>\n';
output += '            </ul>\n';
output += '          </li>\n';
output += '        </ul>\n';
output += '        <div id="login-area" class="navbar-right">\n';
output += '        </div>\n';
output += '      </div>  <!-- /.container-fluid -->\n';
output += '    </nav>\n';
// output += '    <!-- after the navbar, I want a second row to contain the project name (if any), -->\n';
// output += '    <!-- undo/redo/discard_all, and the "Blocks/Code" tabs.  Use a div for this. -->\n';
output += '    <div id="editView">\n';
output += '      <nav class="navbar navbar-default navbar-narrow"> <!-- second nav row -->\n';
output += '        <ul class="nav nav-pills navbar-right">\n';
output += '          <li class="active"><a href="#blocklyContainer" data-toggle="pill" id="displayBlocks">' + Blockscad.Msg.BLOCKS_TAB + '</a></li>\n';
output += '          <li><a href=\'#openScadPre\' data-toggle="pill" id="displayCode">' + Blockscad.Msg.CODE_TAB + '</a></li>\n';
output += '        </ul> \n';
output += '        <div class="input-group">\n';
output += '          <span class="input-group-addon" id="proj_name_label">' + Blockscad.Msg.PROJECT_NAME + '</span>\n';
output += '          <input type="text" id="project-name" class="form-control proj-input" value="' + Blockscad.Msg.PROJECT_NAME_DEFAULT + '" maxlength="28" style="width: 300px;">\n';
output += '        </div>\n';
output += '        <div class="btn-over-blockly" style="margin-left: 20px">\n';
// output += '<!--           <button id="redrawBlocksButton" class="btn btn-default notext" type="button"\n';
// output += '            title="Redraw all blocks in workspace." style="margin-right:20px">\n';
// output += '            <img src="imgs/refresh.svg" width="19px" height="19px">\n';
// output += '          </button> -->\n';
output += '          <div class="btn-group navbar-btn" role="group" aria-label="...">\n';
output += '            <div style="display: inline-block" title="' + Blockscad.Msg.MOUSEOVER_UNDO + '" style="margin-right:-5px">\n';
output += '              <button type="button" class="btn btn-default" id="undoButton" style="margin-right: -5px">\n';
output += '                <img src="imgs/undo.svg" width="25px" height="19px">\n';
output += '              </button>\n';
output += '            </div>\n';
output += '            <div style="display: inline-block" title="' + Blockscad.Msg.MOUSEOVER_REDO + '">\n';
output += '              <button type="button" class="btn btn-default" id="redoButton" style="margin-right: 20px">\n';
output += '                <img src="imgs/redo.svg" width="25px" height="19px">\n';
output += '              </button>\n';
output += '            </div>\n';
output += '          </div>\n';
output += '          <button id="trashButton" class="btn btn-default notext" title="' + Blockscad.Msg.MOUSEOVER_TRASHCAN + '">\n';
output += '            <img src="blockly/media/1x1.gif" class="trash icon21">\n';
output += '          </button>\n';
output += '        </div> <!-- undo/redo/trash div --> \n';
output += '      </nav> <!-- end second nav row -->\n';
output += '      <!-- End of the header content -->\n';
output += '\n';
output += '      <!-- beginning of page content (blockly + viewer) -->\n';
output += '      <div class="tab-content">\n';
output += '        <div class="tab-pane active" id="blocklyContainer">\n';
output += '          <div id="blocklyDiv">\n';
output += '\n';
output += '            <div class="resizableDiv">\n';
output += '              <div id="renderDiv">\n';
output += '                <input type="text" id="defColor"/>\n';
output += '                <select id="viewMenu" class="vmenu">\n';
output += '                  <option value="diagonal">' + Blockscad.Msg.DIRECTION_DIAGONAL + '</option>\n';
output += '                  <option value="front">' + Blockscad.Msg.DIRECTION_FRONT + '</option>\n';
output += '                  <option value="top">' + Blockscad.Msg.DIRECTION_TOP + '</option>\n';
output += '                  <option value="right">' + Blockscad.Msg.DIRECTION_RIGHT + '</option>\n';
output += '                  <option value="left">' + Blockscad.Msg.DIRECTION_LEFT + '</option>\n';
output += '                  <option value="back">' + Blockscad.Msg.DIRECTION_BACK + '</option>\n';
output += '                  <option value="bottom">' + Blockscad.Msg.DIRECTION_BOTTOM + '</option>\n';
output += '                </select>\n';
output += '                <button type="button" id="viewReset" class="vreset">' + Blockscad.Msg.RESET_VIEW_BUTTON;
output += '                </button>\n';
output += '<!--';
output += '                 <button type="button" id="picButton" class="btn btn-default btn-pushed">';
output += '                  Pic';
output += '                </button>\n';
output += '                <button type="button" id="rPicButton" class="btn btn-default btn-pushed">';
output += '                  Rotating Pic';
output += '                </button> \n';
output += '-->';
output += '                <button type="button" id="axesButton" class="btn btn-default btn-pushed">\n';
output += '                  <img src="imgs/axes.png">\n';
output += '                </button>\n';
// output += '\n';
// output += '\n';
output += '                <!-- <input type="text" id="colorButton"/> -->\n';
// output += '\n';
output += '              </div> <!--renderDiv -->\n';
// output += '\n';
output += '              <div id="paneContainer">\n';
output += '                <div id="renderPane">\n';
output += '                  <button type="button" class="btn btn-default btn-lg changeable" id="renderButton">' + Blockscad.Msg.RENDER_BUTTON + '</button>\n';
output += '                  <button type="button" class="btn btn-default btn-lg btn-danger " id="abortButton">' + Blockscad.Msg.ABORT_BUTTON + '</button>\n';
output += '                  <div id="stl_buttons" class="pull-right" style="padding:5px 5px;">\n';
output += '                    <select id="render-type" style="padding:2px 4px;"></select>\n';
output += '                    <button type="button" class="btn btn-default btn-lg changeable" id="stlButton">' + Blockscad.Msg.GENERATE_STL + '</button>\n';
output += '                  </div>\n';
output += '                  <div id="render-ongoing">' + Blockscad.Msg.RENDER_IN_PROGRESS + '  <img id=busy src="imgs/busy2.gif"></div>\n';
output += '                  <div id="error-message"></div>\n';
output += '                </div>\n';
output += '              </div> <!-- paneContainer -->\n';
output += '            </div> <!-- resizable div -->\n';
// output += '\n';
output += '          </div> <!-- blocklyDiv -->\n';
output += '        </div>\n';
output += '        <!-- Blockly Container (tab pane)-->\n';
output += '        <pre class="tab-pane content" id="openScadPre"></pre>\n';
output += '      </div>\n';
output += '      <!-- end tab content -->\n';
output += '    </div> <!-- end of the #editView content  -->\n';
// output += '\n';
output += '    <div id="projectView" style="display:none">\n';
// output += '      <!-- first row - a "my projects" label, a "New" button on the right -->\n';
output += '      <div style="width:100%; background-color:#bbbbff;">\n';
output += '        <span class="proj-header">' + Blockscad.Msg.MY_PROJECTS + '</span>\n';
output += '        <button type="button" class="btn btn-default new-project spacey">' + Blockscad.Msg.NEW_PROJECT_BUTTON + '</button>\n';
output += '        <input type="text" class="search noselect" title="Filter" placeholder="' + Blockscad.Msg.PROJECT_LIST_FILTER + '"  id="ptsearch"/>\n';
output += '        <button type="button" class="btn btn-default plist-cancel spacey">' + Blockscad.Msg.PROJECT_LIST_EXIT + '</button>\n';
output += '      </div>\n';
output += '        <table id="projTable" class="table table-striped sortable" style="padding:0px">\n';
output += '          <colgroup>\n';
output += '            <col style="width:80px">\n';
output += '            <col class="col-md-4">\n';
output += '            <col class="col-md-4">\n';
output += '            <!-- this was the column for "is project shared" attribute <col class="col-md-2"> -->\n';
output += '            <col class="col-md-4">\n';
output += '          </colgroup>\n';
output += '          <thead>\n';
// output += '            <!-- <tr> -->\n';
output += '              <th class="sorttable_nosort" style="width:80px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\n';
output += '              <th class="noselect">' + Blockscad.Msg.PROJECT_NAME + '</th>\n';
output += '              <th class="noselect">' + Blockscad.Msg.PROJECT_LIST_LAST_MODIFIED + '</th>\n';
// output += '              <!-- this is the shared column <th>Shared</th> -->\n';
output += '              <th class="sorttable_nosort"></th>\n';
// output += '         <!--    </tr> -->\n';
output += '          </thead> \n';
output += '          <tbody id="projList">\n';
output += '          </tbody>\n';
output += '        </table>\n';
output += '        <button type="button" id="list-more" class="btn btn-default">' + Blockscad.Msg.PROJECT_LIST_MORE_BUTTON + '</button>\n';
output += '    </div> <!-- end of projectView -->\n';
output += '  </div> <!-- end of main -->\n';
output += '\n';
output += '\n';
// output += '  <!-- html for Popups -->\n';
// output += '  <!-- Popup login -->\n';
output += '  <div id="login-user" class="modal">\n';
output += '    <div class="modal-dialog">\n';
output += '     <div class="modal-md">\n';
output += '      <div class="modal-content">\n';
output += '        <form id="login-form">\n';
output += '          <fieldset>\n';
output += '            <div class="modal-header">\n';
output += '              <a href="#" data-dismiss="modal" class="close">\n';
output += '              </a>\n';
output += '              <h3>' + Blockscad.Msg.LOGIN_BUTTON + '</h3>\n';
output += '            </div>\n';
output += '            <div class="modal-body">\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label" for="username">' + Blockscad.Msg.USERNAME_FIELD + '</label>\n';
output += '                <input class="username pull-right" id="login-username" type="text" autocomplete="off" name="username" maxlength="30" />\n';
output += '              </div>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label" for="password">' + Blockscad.Msg.PASSWORD_FIELD + '</label>\n';
output += '                <input type="password" name="password" id="login-password" autocomplete="off" class="password pull-right" maxlength="30"/>\n';
output += '              </div>\n';
output += '            </div>\n';
output += '            <div class="modal-footer">\n';
output += '              <div class="footer-error" id="login-error" style="margin-top:-5px; margin-bottom:12px; "></div>\n';
output += '              <div>\n';
output += '                <button id="logbut" class="button primary" type="submit" style="float: left;">' + Blockscad.Msg.LOGIN_BUTTON + '</button> \n';
output += '                <a href="#" id="forgot-password" style="float: right;">' + Blockscad.Msg.PASSWORD_FORGOT_FIELD + '</a>\n';
output += '              </div>\n';
output += '            </div>\n';
// output += '\n';
output += '          </fieldset>\n';
output += '        </form>\n';
// output += '\n';
output += '      </div><!-- /.modal-content -->\n';
output += '      </div><!-- /.modal-md -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div><!-- /.modal -->\n';
// output += '  <!-- End Login Popup -->\n';
// output += '  <!-- Popup change Password -->\n';
output += '  <div id="change-password-modal" class="modal" data-backdrop="true">\n';
output += '    <div class="modal-dialog">\n';
output += '      <div class="modal-content">\n';
output += '        <form id="password-settings-form" novalidate>\n';
output += '          <fieldset>\n';
output += '            <div class="modal-header">\n';
output += '              <a href="#" data-dismiss="modal" data-target="#password-settings-modal" class="close">x\n';
output += '              </a>\n';
output += '              <h3>' + Blockscad.Msg.CHANGE_PASSWORD + '</h3>\n';
output += '              <span>' + Blockscad.Msg.CHANGE_PASSWORD_INSTRUCTIONS + '</span>\n';
output += '            </div>\n';
output += '            <div class="modal-body">\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="password">' + Blockscad.Msg.OLD_PASSWORD + ' :</label>\n';
output += '                <input type="password" id="change-pw-old" name="old-password" autocomplete="off" class="password regform" maxlength="30"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="password-error"></span>\n';
output += '                </div>\n';
output += '              </div>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="password">' + Blockscad.Msg.NEW_PASSWORD + ' :</label>\n';
output += '                <input type="password" id="change-pw-new" name="new-password" autocomplete="off" class="password regform" maxlength="30"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="password-error"></span>\n';
output += '                </div>\n';
output += '              </div>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="pass2">' + Blockscad.Msg.CONFIRM_NEW_PASSWORD + ' :</label>\n';
output += '                <input type="password" id="change-pw-2" autocomplete="off" class="password regform" maxlength="30"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="password-confirm-error"></span>\n';
output += '                </div> \n';
output += '              </div>\n';
output += '              <div class="buttons-right">\n';
output += '                <button class="button primary" type="submit">' + Blockscad.Msg.CHANGE_PASSWORD + '</button> \n';
output += '              </div>\n';
output += '            </div>\n';
output += '            <div class="modal-footer">\n';
output += '            <span class="footer-error" id="pw-error"></span>\n';
output += '            </div>\n';
output += '          </fieldset>\n';
output += '        </form>\n';
// output += '\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div><!-- /.modal -->\n';
// output += '  <!-- end change password popup -->\n';
// output += '  <!-- Popup change Email -->\n';
output += '  <div id="change-email-modal" class="modal" data-backdrop="true">\n';
output += '    <div class="modal-dialog">\n';
output += '      <div class="modal-content">\n';
output += '        <form id="email-settings-form" novalidate>\n';
output += '          <fieldset>\n';
output += '            <div class="modal-header">\n';
output += '              <a href="#" data-dismiss="modal" data-target="#email-settings-modal" class="close">x\n';
output += '              </a>\n';
output += '              <h3>' + Blockscad.Msg.CHANGE_EMAIL + '</h3>\n';
output += '            </div>\n';
output += '            <div class="modal-body">\n';
output += '              <p id="current-email">' + Blockscad.Msg.CHANGE_EMAIL_CURRENT + ' :</p>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="email">' + Blockscad.Msg.CHANGE_EMAIL_NEW + ' :</label>\n';
output += '                <input type="text" id="new-email" name="new-email" autocomplete="off" class="email regform" size="30"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="email-error"></span>\n';
output += '                </div> \n';
output += '              </div>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="password">' + Blockscad.Msg.PASSWORD_FIELD + ' :</label>\n';
output += '                <input type="password" id="change-email-pw" name="password" autocomplete="off" class="password regform" maxlength="30"/>\n';
output += '              </div> \n';
output += '              <div class="buttons-right">\n';
output += '                <button class="button primary" type="submit">' + Blockscad.Msg.CHANGE_EMAIL + '</button> \n';
output += '              </div>\n';
output += '            </div>\n';
output += '            <div class="modal-footer">\n';
output += '            <span class="footer-error" id="email-pw-error"></span>\n';
output += '            </div>\n';
output += '          </fieldset>\n';
output += '        </form>\n';
// output += '\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div><!-- /.modal -->\n';
// output += '  <!-- end change password popup -->\n';
// output += '  <!-- Popup register user -->\n';
output += '  <div id="register-user" class="modal">\n';
output += '    <div class="modal-dialog">\n';
output += '      <div class="modal-content modal-md">\n';
output += '        <form id="register-form">\n';
output += '          <fieldset>\n';
output += '            <div class="modal-header">\n';
output += '              <a href="#" data-dismiss="modal" class="close">x\n';
output += '              </a>\n';
output += '              <h3>' + Blockscad.Msg.REGISTER_NEW_USER + '</h3>\n';
output += '            </div>\n';
output += '            <div class="modal-body">\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="username">' + Blockscad.Msg.USERNAME_FIELD + '</label>\n';
output += '                <input class="username regform" id="register-username" type="text" autocomplete="off" name="username" maxlength="30" />\n';
output += '                <div class="form-error">\n';
output += '                  <span id="username-error"></span>\n';
output += '                </div>\n';
output += '              </div>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="password">' + Blockscad.Msg.PASSWORD_FIELD + '</label>\n';
output += '                <input type="password" id="register-password" name="password" autocomplete="off" class="password regform" maxlength="30"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="password-error"></span>\n';
output += '                </div>\n';
output += '              </div>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="pass2">' + Blockscad.Msg.PASSWORD_RETYPE_FIELD + '</label>\n';
output += '                <input type="password" id="pass2" autocomplete="off" class="password regform" maxlength="30"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="password-confirm-error"></span>\n';
output += '                </div> \n';
output += '              </div>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="email">' + Blockscad.Msg.EMAIL_FIELD + '</label>\n';
output += '                <input type="text" id="register-email" name="email" autocomplete="off" class="email regform"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="email-error"></span>\n';
output += '                </div> \n';
output += '              </div>\n';
output += '            </div>\n';
output += '            <div class="modal-footer">\n';
output += '              <span class="error"></span>\n';
output += '              <div class="buttons-right">\n';
output += '                <button class="button primary" type="submit">' + Blockscad.Msg.REGISTER_BUTTON + '</button> \n';
output += '              </div>\n';
output += '            </div>\n';
// output += '\n';
output += '          </fieldset>\n';
output += '        </form>\n';
// output += '\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div><!-- /.modal -->\n';
// output += '  <!-- end of registration popup -->\n';
// output += '  <!-- Popup  password recovery-->\n';
output += '  <div id="pw-recover" class="modal">\n';
output += '    <div class="modal-dialog">\n';
output += '      <div class="modal-content modal-md">\n';
output += '        <form id="pw-recover-form" novalidate>\n';
output += '          <fieldset>\n';
output += '            <div class="modal-header">\n';
output += '              <a href="#" data-dismiss="modal" class="close">x\n';
output += '              </a>\n';
output += '              <h3>' + Blockscad.Msg.RESET_PASSWORD + '</h3>\n';
output += '            </div>\n';
output += '            <div class="modal-body">\n';
output += '              <p><b>' + Blockscad.Msg.PASSWORD_FORGOT_FIELD + '</b></p>\n';
output += '              <p>' + Blockscad.Msg.RESET_PASSWORD_INSTRUCTIONS + '</p>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="username">' + Blockscad.Msg.USERNAME_FIELD + '</label>\n';
output += '                <input class="username regform" id="recover-username" type="text" autocomplete="off" name="username" maxlength="30" />\n';
output += '                <div>\n';
output += '                  <span class="email-error" id="un-recover-error" style="color:#b04444;"></span>\n';
output += '                </div>\n';
output += '              </div><p>' + Blockscad.Msg.DIALOG_OR + '</p>\n';
output += '              <div class="form-group"> \n';
output += '                <label class="control-label mycl" for="email">' + Blockscad.Msg.EMAIL_FIELD + '</label>\n';
output += '                <input type="text" id="recover-email" name="email" autocomplete="off" class="email regform"/>\n';
output += '                <div>\n';
output += '                  <span class="email-error" id="em-recover-error" style="color:#b04444;"></span>\n';
output += '                </div> \n';
output += '              </div>\n';
output += '            </div>\n';
output += '            <div class="modal-footer">\n';
output += '              <div class="buttons-right">\n';
output += '                <button class="button primary" type="submit">' + Blockscad.Msg.RESET_PASSWORD_LINK_BUTTON + '</button> \n';
output += '              </div>\n';
output += '            </div>\n';
// output += '\n';
output += '          </fieldset>\n';
output += '        </form>\n';
// output += '\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div><!-- /.modal --> <!-- end of password recovery popup -->\n';
// output += '  <!-- password recovery email sent modal -->\n';
output += '  <div id="recover-email-sent" class="modal">\n';
output += '    <div class="modal-dialog modal-sm">\n';
output += '      <div class="modal-content">\n';
output += '        <div class="modal-header">\n';
output += '          <a href="#" data-dismiss="modal" class="close">x\n';
output += '          </a>\n';
output += '          <h3>' + Blockscad.Msg.PASSWORD_RESET_EMAIL_SENT + '</h3>\n';
output += '        </div>\n';
output += '        <div class="modal-body">' + Blockscad.Msg.PASSWORD_RESET_EMAIL_INSTRUCTIONS;
output += '        </div>\n';
output += '      </div>\n';
output += '    </div>\n';
output += '  </div> <!-- end of password recovery email sent modal -->\n';
// output += '  <!--  online delete confirm popup -->\n';
output += '  <div id="online-delete-confirm" class="modal" data-backdrop="false">\n';
output += '    <div class="modal-dialog modal-sm" style="width:400px">\n';
output += '      <div class="modal-content">\n';
output += '        <div class="modal-header">\n';
output += '          <a href="#" data-dismiss="modal" class="close">x\n';
output += '          </a>\n';
output += '          <h4 class="modal-title"></h4>\n';
output += '        </div>\n';
output += '        <div class="modal-footer">\n';
output += '            <button id="toss-it" class="button btn-lg btn-default primary pull-left" style="margin-left:90px" type="button" data-dismiss="modal" data-target="#online-delete-confirm">' + Blockscad.Msg.CONFIRM_DIALOG_YES + '</button> \n';
output += '            <button id="whatthe" class="button btn-default btn-lg primary" style="margin-right:90px" type="button" data-dismiss="modal" data-target="#online-delete-confirm">' + Blockscad.Msg.CONFIRM_DIALOG_NO + '</button> \n';
output += '        </div>\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div> <!-- end of online delete-confirm popup -->\n';
// output += '\n';
// // output += '  <!--  delete account confirm popup -->\n';
output += '  <div id="delete-account-confirm" class="modal">\n';
output += '    <div class="modal-dialog modal-sm" style="width:600px">\n';
output += '      <div class="modal-content">\n';
output += '        <div class="modal-header">\n';
output += '          <h4>' + Blockscad.Msg.DELETE_ACCOUNT_CONFIRM + '</h4>\n';
output += '        </div>\n';
output += '        <div class="modal-footer">\n';
output += '            <button id="delete-account-yes" class="button btn-lg btn-default primary pull-left" style="margin-left:10%" type="button" data-dismiss="modal" data-target="#delete-account-confirm">' + Blockscad.Msg.CONFIRM_DIALOG_YES + '</button> \n';
output += '            <button class="button btn-default btn-lg primary" style="margin-right:10%" type="button" data-dismiss="modal" data-target="#delete-account-confirm">' + Blockscad.Msg.CONFIRM_DIALOG_NO + '</button> \n';
output += '        </div>\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div>\n';
// output += '  <!-- end of delete-confirm popup -->\n';
// output += '  <!--  delete account popup -->\n';
output += '  <div id="delete-account-modal" class="modal">\n';
output += '    <div class="modal-dialog modal-sm" style="width:600px">\n';
output += '      <div class="modal-content">\n';
output += '        <form id="delete-account-form" novalidate>\n';
output += '          <fieldset>\n';
output += '            <div class="modal-header">\n';
output += '              <a href="#" data-dismiss="modal" data-target="#delete-account-modal" class="close">x\n';
output += '              </a>\n';
output += '              <h4>' + Blockscad.Msg.DELETE_ACCOUNT + '</h4>\n';
output += '              <h3>' + Blockscad.Msg.DELETE_ACCOUNT_INSTRUCTIONS_ONE + '</b></h3>\n';
output += '              <p>' + Blockscad.Msg.DELETE_ACCOUNT_INSTRUCTIONS_TWO + '</p>\n';
output += '            </div>\n';
output += '            <div class="modal-body">\n';
output += '              <div class="form-group"> \n';
output += '                <label  for="password">' + Blockscad.Msg.DELETE_ACCOUNT_CONFIRM_PASSWORD + ' : </label>\n';
output += '                <input type="password" id="del-acct-pw" name="password" autocomplete="off" class="password regform" maxlength="30"/>\n';
output += '                <div class="form-error">\n';
output += '                  <span class="password-error"></span>\n';
output += '                </div>\n';
output += '              </div>\n';
output += '               <div class="buttons-right">\n';
output += '                <button class="button primary btn-default btn-lg" type="submit">' + Blockscad.Msg.DELETE_ACCOUNT_BUTTON + '</button> \n';
output += '              </div>\n';
output += '            </div>\n';
output += '            <div class="modal-footer">\n';
output += '            <span class="footer-error" id="da-pw-error"></span>\n';
output += '            </div>\n';
output += '          </fieldset>\n';
output += '        </form>\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div>\n';
// output += '  <!-- end of delete account popup -->\n';
// output += '  <!--  delete reactivate popup -->\n';
output += '  <div id="delete-reactivate" class="modal">\n';
output += '    <div class="modal-dialog modal-sm" style="width:500px">\n';
output += '      <div class="modal-content">\n';
output += '        <div class="modal-header">\n';
output += '          <a href="#" data-dismiss="modal" class="close">x\n';
output += '          </a>\n';
output += '          <h4><b>' + Blockscad.Msg.REACTIVATE_ACCOUNT_TITLE + '</b></h4>\n';
output += '        </div>\n';
output += '        <div class="modal-body">\n';
output += '          <p>' + Blockscad.Msg.REACTIVATE_ACCOUNT_EXPLAINED + '</p>\n';
output += '         <p><a href="#" data-toggle="modal" data-target="#change-password-modal" data-dismiss="modal" data-target="#delete-reactivate">' + Blockscad.Msg.CHANGE_PASSWORD + '</a><p>'
output += '        </div>\n';
output += '        <div class="modal-footer">\n';
output += '            <button class="button btn-default btn-lg primary" style="margin-right:10%" type="button" data-dismiss="modal" data-target="#delete-reactivate">' + Blockscad.Msg.REACTIVATE_BUTTON + '</button> \n';
output += '        </div>\n';
output += '      </div><!-- /.modal-content -->\n';
output += '    </div><!-- /.modal-dialog -->\n';
output += '  </div>\n';
// output += '  <!-- end of delete reactivate popup -->\n';
// output += '  <!-- About popup -->\n';
output += '  <div id="about-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="about-modal" aria-hidden="true">\n';
output += '    <div class="modal-dialog">\n';
output += '      <div class="modal-content">\n';
output += '    <div class="modal-header">\n';
output += '      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n';
output += '      <h3 class="modal-title">BlocksCAD\n';
output += '      <small>Easy, Open-Source Solid CAD for Everyone!</small></h3>\n';
output += '    </div>\n';
output += '    <div class="modal-body">\n';
output += '      <div>\n';
output += '        <p>Version ' + Blockscad.version + ' (' + Blockscad.releaseDate + ')</p>\n';
output += '        <br>\n';
output += '        <p>Want to help? <a href="https://github.com/EinsteinsWorkshop/BlocksCAD">Get involved!</a></p>\n';
output += '        <p>Have feedback? <a href="mailto://blockscad@einsteinsworkshop.com">blockscad@einsteinsworkshop.com</a>\n';
output += '          <p><small><small>Developed with the sponsorship of the Defense Advanced Research Projects Agency (DARPA) and delivered to the U.S. Government with Unlimited Rights as defined in DFARS 252.227-7013.<br>Approved for Public Release, Distribution Unlimited.<br>Created by Katy Hamilton, J. Yoder, and Matthew Minuti. Copyright and Trademark 2014-2015 H3XL, Inc.</small></small>\n';
output += '          </p>\n';
output += '      </div>\n';
output += '    </div>\n';
output += '    <div class="modal-footer">\n';
output += '      <div class="row">\n';
output += '        <div class="col-md-4">\n';
output += '          <a href="http://www.gnu.org/licenses/gpl-3.0-standalone.html" target="_blank">Licensed GPLv3 or later</a></div>\n';
output += '        <div class="col-md-4">\n';
output += '          <a href="TOS.html" target="_blank">Terms of Service</a></div>\n';
output += '        <div class="col-md-4">\n';
output += '          <a href="privacy.html" target="_blank">Privacy Policy</a></div>\n';
output += '      </div>\n';
output += '    </div>\n';
output += '  </div>\n';
output += '    </div>\n';
output += '  </div>\n';
// output += '  <!-- Message popup -->\n';
output += '  <div id="message-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="message-modal" aria-hidden="true">\n';
output += '    <div class="modal-dialog modal-sm">\n';
output += '      <div class="modal-content">\n';
output += '        <div class="modal-header">\n';
output += '          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n';
output += '        </div>\n';
output += '        <div id="message-text" class="modal-body">Display a message here.\n';
output += '        </div>\n';
output += '      </div>\n';
output += '    </div>\n';
output += '  </div>\n';
// output += '  <!-- end of popups -->   \n';

return output;
}