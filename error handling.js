//error handling
//try catch
try {
    console.log('Memulai program');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena tidak ada error, blok ini akan diabaikan');
  }
  //Kode tersebut tidak akan mengeksekusi kode di dalam blok catch. 
  // Jika ingin blok kode catch dieksekusi, tambahkan error di dalam blok try. Perhatikan contoh berikut ini.
  console.log('');
  try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }
  //finallly..Finally adalah blok kode yang berada di akhir try-catch. Bilamana catch
  //dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi. Simak contoh di bawah ini.
  console.log('');   
  try {
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }
  //implementasi
  console.log('implementasi');
  function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
      if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
      }
   
      const grade = grades[i];
      let predicate;
   
      if (grade >= 90) {
        predicate = 'A';
      } else if (grade >= 80) {
        predicate = 'B';
      } else if (grade >= 70) {
        predicate = 'C';
      } else if (grade >= 60) {
        predicate = 'D';
      } else {
        predicate = 'E';
      }
   
      console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
  }
   
  try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
  } catch (e) {
    console.error(e);
  }