<div class="modal-header">
	<h2>This is a modal!</h2>
</div>
<div class="modal-body">
	<form>
	  <div class="control-group">
	    <label for="contact-firstName" class="control-label">First name:</label>
	    <input id="contact-firstName" name="firstName" type="text" value="{{ firstName }}"/>
	  </div>
	  <div class="control-group">
	    <label for="contact-lastName" class="control-label">Last name:</label>
	    <input id="contact-lastName" name="lastName" type="text" value="{{ lastName }}"/>
	  </div>
	  <div class="control-group">
	    <label for="contact-phoneNumber" class="control-label">Phone number:</label>
	    <input id="contact-phoneNumber" name="phoneNumber" type="text" value="{{ phoneNumber }}"/>
	  </div>
	  <button class="btn js-submit" type="submit">Save</button>
	</form>
</div>
<div class="modal-footer">
	<button class="btn js-close">Close</button>
</div>
