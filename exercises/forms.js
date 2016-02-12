/*
Validate all fields on the following form with Javascript.
 <form id="contactForm" action="" >
      <fieldset>
        <legend>Contact Details</legend>
        <p>
          <label for="custname">Name</label> 
          <input id="custname" name="custname" />
          Required
        </p>
        <p>
          <label for="company">Company</label> 
          <input id="company" name="company" type="text" />
          Optional
        </p>
        <p>
          <label for="email">Email</label> 
          <input id="email" name="email" type="text" />
          Required
        </p>
        <p>
          <label for="telephone">Telephone</label> 
          <input id="telephone" name="telephone" type="text" />
          Optional
        </p>
        <p>
          <label for="website">Website</label> 
          <input id="website" name="website" type="text" />
          Required
        </p>
        <p>
          <input class="submit" type="submit" name="submit" value="Submit Contact Details" />
          <input type="reset" value="clear" />
        </p>
      </fieldset>
    </form>
*/

/*
Program a text field (an <input type="text"> tag) that letters cannot be typed into. Only numbers are allowed.
*/


/*
Extend a text field so that when the user types, a list of suggested values is shown below the field. You have an array of possible values available and should show those that start with the text that was typed. When a suggestion is clicked, replace the text field’s current value with it.

<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  // Your code here.
</script>
*/

