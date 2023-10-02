import '../../styles/profile-card.scss';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function Avatar() {
  return (
    <img className="avatar" src="images/me.jpeg" alt="Jonas Schmedtmann" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Hemant</h1>
      <p>
        Full-stack web developer. When not coding or preparing a course, I like
        to play board games, to cook (and eat), or to just enjoy the Portuguese
        sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
      for each web dev skill that you have,
      customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default ProfileCard;
