---
title: "Quiz Example"
date: 2025-03-27
description: "Example page demonstrating interactive quizzes"
---

# Interactive Quizzes

This page demonstrates how to create interactive quizzes in your teaching materials. Quizzes are excellent tools for formative assessment and helping students check their understanding.

## Example Quiz

Below is an example quiz with different question types:

{{< quiz id="language-quiz" >}}

{{< mcq question="Which of the following is NOT a Romance language?" name="q1" options="French,Italian,German,Spanish" >}}

{{< mcq question="What is the past tense of 'to go' in English?" name="q2" options="Goed,Went,Gone,Going" >}}

{{< text-question question="What is the capital city of France?" name="q3" placeholder="Type your answer here" >}}

{{< text-question question="Translate 'Hello, how are you?' to French" name="q4" placeholder="Type your translation here" >}}

{{< /quiz >}}

## How to Use the Quiz Shortcodes

To create a quiz in your content, use the following shortcodes:

```
{{</* quiz id="unique-quiz-id" */>}}

{{</* mcq question="Your multiple choice question" name="q1" options="Option 1,Option 2,Option 3,Option 4" */>}}

{{</* text-question question="Your text question" name="q2" placeholder="Custom placeholder text" */>}}

{{</* /quiz */>}}
```

You can include as many questions as needed within the quiz container.

## Benefits of Interactive Quizzes

Interactive quizzes offer several benefits for language teaching:

1. Immediate feedback for students
2. Engagement through active participation
3. Self-assessment opportunities
4. Reinforcement of key concepts
5. Variety in learning activities

Consider using quizzes at the end of each teaching unit to help students review and consolidate their learning. You can create quizzes with different difficulty levels to accommodate diverse learning needs.
