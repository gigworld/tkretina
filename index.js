<!DOCTYPE html>
<html>
<body>

<form id="myForm">
<select id="mySelect">
  <option>Apple</option>
  <option>Pear</option>
  <option>Banana</option>
  <option>Orange</option>
</select>
</form>


<p>The id of the form is:<p>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = document.getElementById("mySelect").form.id;
</script>

</body>
</html>

<p>This file has been modified:<p>
<p id="demo"></p>
