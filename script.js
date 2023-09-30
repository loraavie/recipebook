        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
        <script type="text/javascript">
          function convertHTMLtoPDF() {
            const jsPDF = window.jspdf.jsPDF;
            const inputElement1 = document.getElementById('recipeName');
            const inputValue1 = inputElement1.value;
        
            const inputElement2 = document.getElementById('ingredients');
            const inputValue2 = inputElement2.value;
        
            const inputElement3 = document.getElementById('instructions');
            const inputValue3 = inputElement3.value;
        
            const doc = new jsPDF('l', 'mm', [297, 210]); // A4 size
        
            // Combine input values into a single string
            const title = inputValue1 + '\n';
            const ingredients= "Ingredients:\n"+ inputValue2;
            const instructions= "\nInstructions: \n"+ inputValue3;

          
            doc.setFont('Helvetica', 'Bold');
            doc.setFontSize(45);
            doc.text( title, 10, 10);

            doc.setFont('times', 'normal');
            doc.setFontSize(18);
            doc.text(ingredients, 20, 20);
            doc.text(instructions, 20, 40 );

            doc.save('recipe.pdf');
          }
        </script>
