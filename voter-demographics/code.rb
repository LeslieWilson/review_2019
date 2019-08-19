array=[

{:First_Name => "Jon", :Last_Name => "Smith", :Age => "25", :Income => 50000, :Household_Size=> 1, :Gender => "Male", :Education => "College"},


{:First_Name => "Jane", :Last_Name => "Davies", :Age => "30", :Income => 60000, :Household_Size=> 3, :Gender => "Female", :Education => "High School"},


{:First_Name => "Sam", :Last_Name => "Farelly", :Age => "32", :Income => 80000, :Household_Size=> 2, :Gender => "Unspecified", :Education => "College"},


{:First_Name => "Joan", :Last_Name => "Favreau", :Age => "35", :Income => 65000, :Household_Size=> 4, :Gender => "Female", :Education => "College"},


{:First_Name => "Sam", :Last_Name => "McNulty", :Age => "38", :Income => 63000, :Household_Size=> 3, :Gender => "Male", :Education => "College"},

{:First_Name => "Mark", :Last_Name => "Minahan", :Age => "48", :Income => 78000, :Household_Size=> 5, :Gender => "Male", :Education => "High School"},

{:First_Name => "Susan", :Last_Name => "Umani", :Age => "45", :Income => 75000, :Household_Size=> 2, :Gender => "Female", :Education => "College"},


{:First_Name => "Bill", :Last_Name => "Perault", :Age => "24", :Income => 45000, :Household_Size=> 1, :Gender => "Male", :Education => "Did Not Complete High School"},

{:First_Name => "Francis", :Last_Name => "Underwood", :Age => "52", :Income => 100000, :Household_Size=> 2, :Gender => "Male", :Education => "College"},

{:First_Name => "Doug", :Last_Name => "Stamper", :Age => "45", :Income => 75000, :Household_Size=> 1, :Gender => "Male", :Education => "College"},
]

sum = 0
agecount = 0
array.each do |x|
    age = x[:Age]
        sum += age.to_i
        agecount += 1
    end
    avg = sum /agecount.to_f
    puts avg

sum = 0
incomeCount = 0
array.each do |x|
    income = x[:Income]
    sum += income
    incomeCount += 1
end
ave = sum/incomeCount.to_f
puts ave


sumhousehold = 0
householdcount = 0


array.each do |x|
    householdsize = x[:Household_Size]
    sumhousehold += householdsize
    householdcount += 1
end
avghousehold = sumhousehold/householdcount.to_f
puts avghousehold.to_f


sumAllGenders = 0
sumFemales = 0
array.each do |x|
    genders = x[:Gender]
    sumAllGenders += 1
        if genders == "Female"
            sumFemales += 1
    end
end
puts "you have #{ sumFemales/ sumAllGenders.to_f * 100}% females"


sumAllGenders = 0
sumMales = 0
array.each do |x|
    genders= x[:Gender]
sumAllGenders +=1
if genders == "Male"
    sumMales += 1
    end
end

puts "you have #{sumMales/sumAllGenders.to_f * 100}% males"


sumAllGenders = 0
sumUnspec = 0
array.each do |x|
    genders = x[:Gender]
    sumAllGenders += 1
    if genders == "Unspecified"
        sumUnspec += 1
    end
end
puts "you have #{sumUnspec/sumAllGenders.to_f * 100 }% unspecified"


sumAllSchoolLevel= 0
sumCollegeLevel = 0
array.each do |x|
    schoolLevel = x[:Education]
    sumAllSchoolLevel += 1
    if schoolLevel =="College"
        sumCollegeLevel += 1
    end
end
puts"you have #{sumCollegeLevel/sumAllSchoolLevel.to_f * 100} % of people who went to college"


sumAllSchoolLevel = 0
sumAllHighschool = 0
array.each do |x|
    schoolLevel = x[:Education]
    sumAllSchoolLevel += 1
    if schoolLevel =="High School"
        sumAllHighschool += 1
    end
end

puts "you have #{sumAllHighschool/sumAllSchoolLevel.to_f * 100}% of people who went to highschool"

sunAllSchoolLevel = 0
sumUnfinishedSchool = 0
array.each do |x|
    schoolLevel = x[:Education]
    sumAllSchoolLevel += 1
    if schoolLevel ==  "Did Not Complete High School"
        sumUnfinishedSchool += 1
    end
end

puts "you have #{sumUnfinishedSchool/sumAllSchoolLevel.to_f * 100}% of people who did not complete highschool"
