"use client";

import React, { useState } from "react";
import { Search, X, Calendar, User, Tag, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Parenting as an Art: Nurturing Toddlers with Love",
    excerpt:
      "Discover the gentle art of parenting toddlers through understanding their developmental needs and fostering emotional intelligence...",
    author: "Dr. Sarah Mitchell",
    date: "2025-05-28",
    category: "Parenting",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Delicate Art of Toddler Parenting</h2>
      <p>Parenting toddlers is perhaps one of the most challenging yet rewarding phases of child-rearing. Between ages 1-3, children undergo rapid cognitive, emotional, and physical development, making this period crucial for their future well-being.</p>
      
      <h3>Understanding the Toddler Mind</h3>
      <p>Toddlers are naturally curious explorers who learn through sensory experiences. Their brains are developing at an incredible pace, forming millions of neural connections daily. This is why consistency, patience, and understanding are paramount.</p>
      
      <h3>Key Strategies for Toddler Parenting:</h3>
      <ul>
        <li><strong>Set Clear Boundaries:</strong> Toddlers need structure to feel secure. Establish consistent routines for meals, naps, and bedtime.</li>
        <li><strong>Positive Reinforcement:</strong> Celebrate small victories and good behavior rather than focusing solely on corrections.</li>
        <li><strong>Active Listening:</strong> Even though toddlers may not express themselves clearly, validate their emotions and help them identify feelings.</li>
        <li><strong>Safe Exploration:</strong> Create environments where they can explore safely while learning about consequences.</li>
        <li><strong>Emotional Regulation:</strong> Model calm behavior during tantrums and teach simple coping strategies.</li>
      </ul>
      
      <h3>The Power of Play</h3>
      <p>Play is a toddler's primary language. Through imaginative play, building blocks, and interactive games, children develop problem-solving skills, creativity, and social awareness. Engage in their world by getting down to their level and participating in their activities.</p>
      
      <h3>Building Independence</h3>
      <p>Encourage age-appropriate independence by allowing toddlers to make simple choices (red cup or blue cup), complete basic tasks, and experience natural consequences in safe situations. This builds confidence and decision-making skills.</p>
      
      <p>Remember, parenting is indeed an art that requires patience, creativity, and unconditional love. Every child is unique, and what works for one may not work for another. Trust your instincts while remaining open to learning and adapting.</p>
    `,
  },
  {
    id: 2,
    title: "Parenting as an Art: Navigating the Teenage Years",
    excerpt:
      "Master the complex art of parenting teenagers by balancing independence with guidance during these transformative years...",
    author: "Prof. Michael Rodriguez",
    date: "2025-05-25",
    category: "Parenting",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Art of Parenting Teenagers: A Delicate Balance</h2>
      <p>Parenting teenagers requires a fundamental shift from the hands-on approach needed for young children to a more consultative, supportive role. This transition period, roughly ages 13-18, is marked by significant physical, emotional, and cognitive changes.</p>
      
      <h3>Understanding Teenage Development</h3>
      <p>The teenage brain undergoes massive restructuring, particularly in areas responsible for decision-making, impulse control, and emotional regulation. This biological reality explains much of typical teenage behavior and should inform our parenting approach.</p>
      
      <h3>Core Principles for Teenage Parenting:</h3>
      <ul>
        <li><strong>Respect Their Growing Independence:</strong> Gradually increase freedoms while maintaining appropriate boundaries and expectations.</li>
        <li><strong>Open Communication:</strong> Create safe spaces for honest conversations without immediate judgment or consequences.</li>
        <li><strong>Choose Your Battles:</strong> Not every issue requires a confrontation. Focus on safety, respect, and core values.</li>
        <li><strong>Be a Consultant, Not a Manager:</strong> Offer guidance when asked, but allow them to make decisions and learn from mistakes.</li>
        <li><strong>Model Behavior:</strong> Demonstrate the values, communication skills, and emotional regulation you want to see.</li>
      </ul>
      
      <h3>Building Trust and Connection</h3>
      <p>Trust is the currency of teenage relationships. Be consistent in your words and actions, follow through on commitments, and admit when you make mistakes. Show genuine interest in their world, friends, and activities without being invasive.</p>
      
      <h3>Handling Conflict Constructively</h3>
      <p>Disagreements are normal and healthy. Approach conflicts as opportunities for problem-solving rather than power struggles. Listen actively, validate their perspective, and work together toward solutions that respect both their growing autonomy and family values.</p>
      
      <h3>Supporting Identity Development</h3>
      <p>Teenagers are actively exploring who they are and who they want to become. Support this journey by exposing them to diverse experiences, encouraging their interests, and helping them understand their strengths and values.</p>
      
      <h3>Preparing for Adulthood</h3>
      <p>Gradually transfer responsibilities to your teenager. Teach practical life skills, financial literacy, and decision-making processes. The goal is to launch a capable, confident young adult who can navigate the world independently.</p>
      
      <p>Remember, the teenage years are temporary, but the relationship you build during this time can last a lifetime. Approach these years with patience, wisdom, and faith in your teenager's potential to become an amazing adult.</p>
    `,
  },
  {
    id: 3,
    title: "Fitness and Marma Therapy: Ancient Wisdom for Modern Wellness",
    excerpt:
      "Explore the powerful combination of physical fitness and Marma therapy to achieve holistic health and vitality...",
    author: "Dr. Priya Sharma",
    date: "2025-05-22",
    category: "Health & Wellness",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Integrating Fitness with Marma Therapy: A Holistic Approach</h2>
      <p>In our quest for optimal health, the ancient Indian practice of Marma therapy combined with modern fitness principles offers a comprehensive path to wellness that addresses both physical strength and energetic balance.</p>
      
      <h3>Understanding Marma Therapy</h3>
      <p>Marma points are vital energy centers in the body, similar to acupuncture points in Traditional Chinese Medicine. These 107 points are located at the intersection of muscles, veins, ligaments, bones, and joints. When stimulated properly, they can enhance healing, improve circulation, and restore energetic balance.</p>
      
      <h3>The Science Behind Marma Points</h3>
      <p>Modern research suggests that Marma points correspond to areas rich in nerve endings, blood vessels, and lymphatic drainage. Stimulation of these points can trigger the release of endorphins, improve blood circulation, and activate the parasympathetic nervous system.</p>
      
      <h3>Integrating Marma Therapy with Fitness:</h3>
      <ul>
        <li><strong>Pre-Workout Activation:</strong> Gentle stimulation of specific Marma points can prepare the body for exercise by increasing circulation and flexibility.</li>
        <li><strong>During Exercise:</strong> Awareness of Marma points during movement can improve body consciousness and prevent injuries.</li>
        <li><strong>Post-Workout Recovery:</strong> Targeted Marma massage can accelerate muscle recovery and reduce inflammation.</li>
        <li><strong>Stress Relief:</strong> Combining physical exercise with Marma therapy provides both physical and mental stress relief.</li>
      </ul>
      
      <h3>Key Marma Points for Fitness Enhancement:</h3>
      <ul>
        <li><strong>Kurcha Marma (Ankle):</strong> Improves stability and balance during workouts</li>
        <li><strong>Kurpara Marma (Elbow):</strong> Enhances upper body strength and coordination</li>
        <li><strong>Hridaya Marma (Heart):</strong> Supports cardiovascular health during cardio exercises</li>
        <li><strong>Nabhi Marma (Navel):</strong> Strengthens core stability and digestive fire</li>
        <li><strong>Adhipati Marma (Crown):</strong> Improves focus and mind-body connection</li>
      </ul>
      
      <h3>Practical Applications:</h3>
      <h4>Morning Routine:</h4>
      <p>Begin with gentle circular massage of Adhipati Marma (crown of head) for mental clarity, followed by stimulation of Kurcha Marma (ankles) to ground and stabilize energy before physical activity.</p>
      
      <h4>During Strength Training:</h4>
      <p>Apply gentle pressure to Kurpara Marma (elbows) between sets to maintain energy flow and prevent stagnation in the arms and shoulders.</p>
      
      <h4>Post-Cardio Recovery:</h4>
      <p>Massage Hridaya Marma (heart center) with cooling oils like coconut or sandalwood to calm the cardiovascular system and promote recovery.</p>
      
      <h3>Benefits of Combined Practice:</h3>
      <ul>
        <li>Enhanced athletic performance and endurance</li>
        <li>Reduced risk of injury through improved body awareness</li>
        <li>Faster recovery and reduced muscle soreness</li>
        <li>Better stress management and emotional balance</li>
        <li>Improved sleep quality and overall vitality</li>
      </ul>
      
      <p>By integrating the wisdom of Marma therapy with modern fitness practices, we create a holistic approach to health that honors both ancient knowledge and contemporary understanding of human physiology.</p>
    `,
  },
  {
    id: 4,
    title: "The Science and Art of Goal Setting",
    excerpt:
      "Master the psychology and practical strategies behind effective goal setting to transform your aspirations into achievements...",
    author: "Dr. James Patterson",
    date: "2025-05-20",
    category: "Personal Development",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Goal Setting: The Foundation of Achievement</h2>
      <p>Goal setting is more than just wishful thinking—it's a scientific process that harnesses the power of focused intention to create meaningful change in our lives. Research in psychology and neuroscience reveals why some goals succeed while others fail.</p>
      
      <h3>The Psychology of Goal Achievement</h3>
      <p>Our brains are goal-seeking mechanisms. When we set clear, specific goals, we activate the Reticular Activating System (RAS), which helps us notice opportunities and resources that align with our objectives. This neurological process explains why goal-setters are more likely to achieve success.</p>
      
      <h3>The SMART-ER Framework:</h3>
      <p>Building on the classic SMART criteria, the SMART-ER approach provides a comprehensive structure:</p>
      <ul>
        <li><strong>Specific:</strong> Define exactly what you want to achieve</li>
        <li><strong>Measurable:</strong> Establish concrete criteria for measuring progress</li>
        <li><strong>Achievable:</strong> Set realistic yet challenging targets</li>
        <li><strong>Relevant:</strong> Ensure goals align with your values and priorities</li>
        <li><strong>Time-bound:</strong> Set clear deadlines and milestones</li>
        <li><strong>Evaluate:</strong> Regularly assess and adjust your approach</li>
        <li><strong>Readjust:</strong> Modify goals based on new information and circumstances</li>
      </ul>
      
      <h3>Types of Goals for Balanced Success:</h3>
      <h4>1. Outcome Goals</h4>
      <p>Focus on the end result you want to achieve (e.g., "Lose 20 pounds," "Get promoted," "Save $10,000")</p>
      
      <h4>2. Process Goals</h4>
      <p>Focus on the actions and behaviors that lead to outcomes (e.g., "Exercise 4 times per week," "Read for 30 minutes daily")</p>
      
      <h4>3. Performance Goals</h4>
      <p>Focus on personal improvement and skill development (e.g., "Improve presentation skills," "Increase typing speed")</p>
      
      <h3>The Goal Hierarchy System:</h3>
      <ul>
        <li><strong>Vision Goals (10+ years):</strong> Your ultimate life direction</li>
        <li><strong>Strategic Goals (3-5 years):</strong> Major milestones toward your vision</li>
        <li><strong>Tactical Goals (1-2 years):</strong> Specific projects and achievements</li>
        <li><strong>Operational Goals (3-12 months):</strong> Quarterly and monthly targets</li>
        <li><strong>Daily Goals:</strong> Daily actions and habits</li>
      </ul>
      
      <h3>Overcoming Common Goal-Setting Pitfalls:</h3>
      <ul>
        <li><strong>Setting Too Many Goals:</strong> Focus on 3-5 major goals at a time</li>
        <li><strong>Lack of Specificity:</strong> Replace "get healthy" with "exercise 150 minutes per week"</li>
        <li><strong>No Accountability:</strong> Share goals with trusted friends or mentors</li>
        <li><strong>Ignoring Obstacles:</strong> Anticipate challenges and create contingency plans</li>
        <li><strong>All-or-Nothing Thinking:</strong> Celebrate small wins and learn from setbacks</li>
      </ul>
      
      <h3>The Power of Written Goals</h3>
      <p>Studies show that people who write down their goals are 42% more likely to achieve them. The act of writing engages different parts of the brain and creates a psychological commitment that verbal goals lack.</p>
      
      <h3>Creating an Action Plan:</h3>
      <ol>
        <li>Break large goals into smaller, manageable tasks</li>
        <li>Identify resources and support systems needed</li>
        <li>Set specific deadlines for each milestone</li>
        <li>Create accountability mechanisms</li>
        <li>Schedule regular review and adjustment sessions</li>
      </ol>
      
      <h3>Maintaining Motivation:</h3>
      <ul>
        <li>Connect goals to your deeper values and purpose</li>
        <li>Visualize successful completion regularly</li>
        <li>Track progress visually (charts, apps, journals)</li>
        <li>Celebrate milestones and small victories</li>
        <li>Surround yourself with supportive, goal-oriented people</li>
      </ul>
      
      <p>Remember, goal setting is a skill that improves with practice. Start with one meaningful goal, apply these principles consistently, and build momentum through small, consistent actions. Your future self will thank you for the intentional steps you take today.</p>
    `,
  },
  {
    id: 5,
    title: "Time Management: Mastering Your Most Valuable Resource",
    excerpt:
      "Learn proven strategies and techniques to optimize your time, increase productivity, and create more balance in your life...",
    author: "Lisa Chen",
    date: "2025-05-18",
    category: "Productivity",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1506784926709-22f1ec395b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Time Management: Your Path to Productivity and Peace</h2>
      <p>Time is our most precious and non-renewable resource. Unlike money, relationships, or health, time spent cannot be recovered. Effective time management isn't about squeezing more activities into your day—it's about making conscious choices that align with your priorities and values.</p>
      
      <h3>Understanding Time Management Psychology</h3>
      <p>Time management challenges often stem from psychological factors: perfectionism, fear of failure, lack of clarity about priorities, and the illusion that we have more time than we actually do. Recognizing these mental patterns is the first step toward improvement.</p>
      
      <h3>The Time Management Matrix</h3>
      <p>Based on Stephen Covey's framework, organize activities into four quadrants:</p>
      <ul>
        <li><strong>Quadrant 1 (Urgent + Important):</strong> Crises, emergencies, deadline-driven projects</li>
        <li><strong>Quadrant 2 (Not Urgent + Important):</strong> Prevention, planning, relationship building, personal development</li>
        <li><strong>Quadrant 3 (Urgent + Not Important):</strong> Interruptions, some calls/emails, unnecessary meetings</li>
        <li><strong>Quadrant 4 (Not Urgent + Not Important):</strong> Time wasters, excessive social media, mindless activities</li>
      </ul>
      <p><strong>Key Insight:</strong> Highly effective people spend most of their time in Quadrant 2, preventing problems before they become urgent.</p>
      
      <h3>Core Time Management Principles:</h3>
      
      <h4>1. The 80/20 Rule (Pareto Principle)</h4>
      <p>80% of your results come from 20% of your efforts. Identify and focus on the activities that generate the most significant impact in your personal and professional life.</p>
      
      <h4>2. Time Blocking</h4>
      <p>Instead of keeping a to-do list, schedule specific time blocks for different activities. This creates realistic expectations and prevents overcommitment.</p>
      
      <h4>3. The Two-Minute Rule</h4>
      <p>If a task takes less than two minutes, do it immediately rather than adding it to your to-do list. This prevents small tasks from accumulating into overwhelming backlogs.</p>
      
      <h4>4. Energy Management</h4>
      <p>Schedule demanding tasks during your peak energy hours and routine tasks during lower-energy periods. Most people have 3-4 hours of peak mental energy per day.</p>
      
      <h3>Practical Time Management Techniques:</h3>
      
      <h4>The Pomodoro Technique</h4>
      <ul>
        <li>Work for 25 minutes with complete focus</li>
        <li>Take a 5-minute break</li>
        <li>After 4 cycles, take a longer break (15-30 minutes)</li>
        <li>This technique improves focus and prevents burnout</li>
      </ul>
      
      <h4>Getting Things Done (GTD)</h4>
      <ul>
        <li>Capture all tasks and ideas in a trusted system</li>
        <li>Clarify what each item means and what action is required</li>
        <li>Organize by context and priority</li>
        <li>Review regularly to maintain system integrity</li>
        <li>Engage with confidence, knowing nothing is forgotten</li>
      </ul>
      
      <h4>The ABC Method</h4>
      <ul>
        <li><strong>A Tasks:</strong> Must do—serious consequences if not completed</li>
        <li><strong>B Tasks:</strong> Should do—mild consequences if not completed</li>
        <li><strong>C Tasks:</strong> Could do—no consequences if not completed</li>
        <li>Always complete A tasks before moving to B tasks</li>
      </ul>
      
      <h3>Digital Time Management Tools:</h3>
      <ul>
        <li><strong>Calendar Apps:</strong> Google Calendar, Outlook for scheduling and time blocking</li>
        <li><strong>Task Management:</strong> Todoist, Asana, Notion for organizing projects</li>
        <li><strong>Time Tracking:</strong> RescueTime, Toggl to understand where time actually goes</li>
        <li><strong>Focus Apps:</strong> Forest, Freedom to minimize distractions</li>
      </ul>
      
      <h3>Common Time Wasters and Solutions:</h3>
      <ul>
        <li><strong>Social Media Scrolling:</strong> Set specific times for checking, use app timers</li>
        <li><strong>Email Overload:</strong> Check email at designated times, unsubscribe ruthlessly</li>
        <li><strong>Perfectionism:</strong> Set "good enough" standards for non-critical tasks</li>
        <li><strong>Saying Yes to Everything:</strong> Practice saying no gracefully</li>
        <li><strong>Multitasking:</strong> Focus on single-tasking for better quality and efficiency</li>
      </ul>
      
      <h3>Building Better Time Habits:</h3>
      <ol>
        <li><strong>Weekly Planning:</strong> Spend 30 minutes each week planning the upcoming week</li>
        <li><strong>Daily Review:</strong> End each day by reviewing accomplishments and planning tomorrow</li>
        <li><strong>Time Auditing:</strong> Track your time for one week to identify patterns</li>
        <li><strong>Batch Similar Tasks:</strong> Group similar activities together to reduce transition time</li>
        <li><strong>Create Routines:</strong> Automate decisions through consistent morning and evening routines</li>
      </ol>
      
      <h3>The Balance Factor</h3>
      <p>Remember that perfect time management isn't about filling every moment with productivity. Build in time for rest, relationships, spontaneity, and activities that bring you joy. A well-managed life includes work, relationships, health, and personal fulfillment.</p>
      
      <p>Start with one or two techniques that resonate with you, implement them consistently for 21 days, and then gradually add more strategies. Time management is a skill that improves with practice and conscious attention.</p>
    `,
  },
  {
    id: 6,
    title: "Inculcating Healthy Habits: The Foundation of Lasting Change",
    excerpt:
      "Discover the science of habit formation and practical strategies to build sustainable healthy habits that transform your life...",
    author: "Dr. Amanda Foster",
    date: "2025-05-15",
    category: "Health & Wellness",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Science and Art of Building Healthy Habits</h2>
      <p>Healthy habits are the compound interest of personal development. Small, consistent actions performed daily create remarkable transformations over time. Understanding the science behind habit formation empowers us to build sustainable changes that stick.</p>
      
      <h3>The Neuroscience of Habits</h3>
      <p>Habits are formed in the basal ganglia, a brain region that allows us to perform complex behaviors automatically. This neurological efficiency frees up mental energy for decision-making in other areas. Research shows it takes an average of 66 days for a new behavior to become automatic.</p>
      
      <h3>The Habit Loop</h3>
      <p>Every habit follows a three-step neurological loop:</p>
      <ul>
        <li><strong>Cue:</strong> Environmental trigger that initiates the behavior</li>
        <li><strong>Routine:</strong> The behavior itself</li>
        <li><strong>Reward:</strong> The benefit you gain from the behavior</li>
      </ul>
      <p>Understanding this loop is crucial for both building new habits and breaking unwanted ones.</p>
      
      <h3>The Four Laws of Behavior Change:</h3>
      
      <h4>1st Law: Make it Obvious (Cue)</h4>
      <ul>
        <li>Design your environment to make good cues visible</li>
        <li>Stack new habits onto existing ones</li>
        <li>Use implementation intentions: "I will [behavior] at [time] in [location]"</li>
        <li>Remove cues for bad habits from your environment</li>
      </ul>
      
      <h4>2nd Law: Make it Attractive (Craving)</h4>
      <ul>
        <li>Pair habits you need to do with habits you want to do</li>
        <li>Join groups where your desired behavior is normal</li>
        <li>Focus on the benefits, not the sacrifices</li>
        <li>Create a motivating ritual before difficult habits</li>
      </ul>
      
      <h4>3rd Law: Make it Easy (Response)</h4>
      <ul>
        <li>Start with habits that take less than 2 minutes</li>
        <li>Reduce friction for good habits</li>
        <li>Use the "two-minute rule" to establish consistency</li>
        <li>Prepare your environment in advance</li>
      </ul>
      
      <h4>4th Law: Make it Satisfying (Reward)</h4>
      <ul>
        <li>Give yourself immediate rewards for completing habits</li>
        <li>Track your habits visually</li>
        <li>Never miss twice in a row</li>
        <li>Celebrate small wins</li>
      </ul>
      
      <h3>Essential Healthy Habits to Cultivate:</h3>
      
      <h4>Physical Health Habits</h4>
      <ul>
        <li><strong>Movement:</strong> Start with 10 minutes daily, gradually increase</li>
        <li><strong>Hydration:</strong> Drink a glass of water upon waking</li>
        <li><strong>Sleep Hygiene:</strong> Consistent bedtime routine, 7-9 hours nightly</li>
        <li><strong>Nutrition:</strong> Add one serving of vegetables to each meal</li>
        <li><strong>Posture:</strong> Set hourly reminders to check and correct posture</li>
      </ul>
      
      <h4>Mental Health Habits</h4>
      <ul>
        <li><strong>Meditation:</strong> Start with 5 minutes of mindfulness daily</li>
        <li><strong>Gratitude:</strong> Write down 3 things you're grateful for each morning</li>
        <li><strong>Learning:</strong> Read or listen to educational content for 20 minutes daily</li>
        <li><strong>Digital Detox:</strong> No screens for the first hour after waking</li>
        <li><strong>Reflection:</strong> Journal for 10 minutes before bed</li>
      </ul>
      
      <h4>Social and Emotional Habits</h4>
      <ul>
        <li><strong>Connection:</strong> Reach out to one friend or family member daily</li>
        <li><strong>Kindness:</strong> Perform one small act of kindness daily</li>
        <li><strong>Active Listening:</strong> Practice giving full attention in conversations</li>
        <li><strong>Boundaries:</strong> Learn to say no to preserve your energy</li>
        <li><strong>Forgiveness:</strong> Practice letting go of small grievances daily</li>
      </ul>
      
      <h3>Habit Stacking Strategy</h3>
      <p>Link new habits to established routines using this formula: "After I [current habit], I will [new habit]."</p>
      <p>Examples:</p>
      <ul>
        <li>After I pour my morning coffee, I will write down three priorities for the day</li>
        <li>After I sit down for dinner, I will share one highlight from my day</li>
        <li>After I brush my teeth at night, I will prepare my clothes for tomorrow</li>
      </ul>
      
      <h3>Overcoming Common Obstacles:</h3>
      
      <h4>Lack of Motivation</h4>
      <p>Motivation is unreliable. Instead, focus on building systems and environments that make good choices easier than bad ones.</p>
      
      <h4>All-or-Nothing Thinking</h4>
      <p>Progress, not perfection, is the goal. Missing one day doesn't ruin your progress—missing two days starts a pattern.</p>
      
      <h4>Trying to Change Too Much at Once</h4>
      <p>Focus on one habit at a time. Master it before adding another. Success builds momentum for future changes.</p>
      
      <h4>Lack of Immediate Results</h4>
      <p>Healthy habits often have delayed rewards. Trust the process and focus on the identity you're building, not just the outcomes.</p>
      
      <h3>The Identity-Based Approach</h3>
      <p>Instead of focusing on what you want to achieve, focus on who you want to become:</p>
      <ul>
        <li>Instead of "I want to lose weight," think "I am someone who takes care of their body"</li>
        <li>Instead of "I want to read more," think "I am a reader"</li>
        <li>Instead of "I want to exercise," think "I am an active person"</li>
      </ul>
      
      <h3>Tracking and Accountability</h3>
      <ul>
        <li>Use a habit tracker app or simple calendar</li>
        <li>Share your goals with supportive friends or family</li>
        <li>Join communities focused on healthy living</li>
        <li>Regular check-ins with an accountability partner</li>
        <li>Celebrate consistency streaks</li>
      </ul>
      
      <h3>The Compound Effect</h3>
      <p>Small habits may seem insignificant, but they compound over time. A 1% improvement daily results in being 37 times better over a year. Focus on small, consistent actions rather than dramatic changes.</p>
      
      <p>Remember, you don't have to be perfect—you just have to be consistent. Start small, be patient with yourself, and trust that small daily actions create extraordinary long-term results.</p>
    `,
  },
];

type BlogPost = (typeof blogPosts)[number];

export default function BlogWithPopups() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Wellness & Growth
            <span className="block text-2xl sm:text-3xl font-medium text-blue-100 mt-2">
              Insights for Life
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover expert insights on parenting, wellness, productivity, and
            personal development. Transform your life with evidence-based
            strategies and practical wisdom.
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="search"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-0 shadow-lg text-gray-700 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/20 transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => openModal(post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm">
                    <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </div>
                    <div className="flex items-center ml-3 text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Get the latest insights on wellness, parenting, and personal growth
            delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 relative">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center mb-2 text-sm">
                  <div className="flex items-center text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Tag className="h-3 w-3 mr-1" />
                    {selectedPost.category}
                  </div>
                  <div className="flex items-center ml-3 text-white/90">
                    <Clock className="h-3 w-3 mr-1" />
                    {selectedPost.readTime}
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center text-white/90 text-sm">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{selectedPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {new Date(selectedPost.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-96 overflow-y-auto">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Found this helpful? Share it with others!
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
