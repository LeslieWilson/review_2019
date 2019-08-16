REQUIRED_CREW_SIZE = 6

available_crew = [
  :captain,
  :first_mate,
  :second_mate,
  :navigator,
  :first_engineer,
  :info_systems_tech,
  :environmental_control_tech,
  :lead_maintenance,
  :first_medical,
  :first_food_ops,
  :combat_systems_officer
]

possible_crew_selections = available_crew.sample(REQUIRED_CREW_SIZE)

# YOUR CODE GOES BELOW
possible_crew_selections.each do |selection|
    puts "use the #{selection.to_s}"
end

puts  ""

REQUIRED_CREW = [:captain, :navigator, :lead_maintenance]

missing_required_crew =  REQUIRED_CREW  - possible_crew_selections

missing_required_crew.each do  |required_crew|
    puts "warning, you'll be without a #{required_crew.to_s}"
end
