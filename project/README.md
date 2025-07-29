# Heart Hub: A Health Tracker for Heart Failure
#### Video Demo: https://youtu.be/Z2QACSpiMzw
#### Description:
Heart Hub is a web-based application designed for mobile phones. It uses the Python-based web framework, Django.
- The project is stored within the "capstone" folder.

This website is designed to make it easy for people with heart failure to manage their condition and monitor their symptoms. It helps bring people to action when they start developing early signs of worsening heart failure.

## Key Features:
- __Track Water Intake__: Track your daily water intake. You can also view or change your recommended fluid restriction levels.
- __Monitor Weight__: Plug in your daily weight and note down your recommended ideal "dry" body weight. You are alerted when there is a sudden change to your weight, as it can be an indication of worsening heart failure.
- __Check Symptoms__: Rate the severity of your symptoms, such as shortness of breath or swelling of your limbs. Based on the traffic light system by the American Heart Association, you'll get notified about the recommended course of action given your symptoms.

#### User Credentials Required
- You need to login or register for an account, to use this application.
- If you haven't logged in, the website will automatically redirect you to the login page.
- You are required to register with a username, email and password. This data will be automatically saved in Django's User model.
- The username and password suffices for logging in.
- New users are shown a homepage with default values provided. These can be adjusted, based on their health needs.


#### Tracking Water Intake
- A Water_Intake model is used. It includes: fluid intake today, recommended fluid restriction level and the date.
- You can view your recommended fluid restriction (FR) level. If you haven't provided one, then a default value of 2000 mL is provided. (This can be adjusted.)
- You are not expected to provide the FR everyday. Everyday, a new entry will be populated with FR drawn from the last entry, or defaulted to 2000 mL if none exists. The fluid intake level will default to 0, for every new day.
- The page will display the FR, exactly by a number of 200 mL or 300 mL cups 🥛.
- Using the + / - toggles, you can add or remove the number of cups that they've drunk. This will update the Water database for the user, for today's entry (only 1 entry a day).
- Any cups drunk will be highlighted in blue. If you exceed your recommended daily fluid intake, the cups will be highlighted in red.
- You can also click for more information, to view the current advice around monitoring fluid levels.

#### Monitoring Weight
- Monitoring weight is an essential part of managing heart failure. Sudden fluctuations in weight can be an early sign of worsening heart failure.
- User data for this is stored in a Weight model. This includes daily recorded weights and any recommended ideal dry weight.
- You are not expected to provide the ideal weight everyday. Everyday, a new entry will be populated with this automatically drawn from the last entry, or a default value if none exists.
- You can also update your ideal dry weight and this will automatically be saved in the Weight database.
- You can record your daily weight. The card will display the change in weight, compared to your last reading. Both the daily weight and message is saved in the Weight database.
    >_🡅 8kg_
- If there's been a sudden weight increase of over 2kg in 2 days, a warning message will be displayed.
    > _🚩🚩🚩Over 2kg increase in 48 hours or less - check for symptoms of fluid overload and speak to your doctor._

- You can click for more information, to see why monitoring weight is important.

#### Symptom Management
- There are a number of key symptoms to monitor on a daily basis. These include: shortness of breath, swelling in your legs or abdomen and frequent coughing.
- These are stored in the Symptom model.
- You can rate the severity of these symptoms, from 1 (normal) to 3 (severe).
- Everyday, the default values will be set to 1. You can press the radio buttons for each component to adjust, and save it the Symptom databse.
- Any symptoms that appear as 2 or 3 will trigger a warning message.
    >_🚨 Medical Alert - Warning! Call your doctor or call 000_

    >_⚠️ Pay Attention - Use Caution! Your symptoms may indicate a need to contact our doctor and changing medications_
- This is based on the traffic light system, as recommended by the American Heart Association "Self Tracker Tool".
- You can click for more information about symptom monitoring.


## Upcoming Changes
- Use graphs to view your changes over time
- Adjust styling for use with larger screens
- Medication tracking
- Adding blood pressure measurements and pulse oximetry reading


